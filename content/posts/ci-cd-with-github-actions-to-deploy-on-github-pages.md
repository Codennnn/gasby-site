---
title: 持续集成：使用 GitHub Actions 来帮你的应用自动化部署到 GitHub Pages
createdAt: '2020-10-06'
updatedAt: '2020-10-06'
---


前文我们介绍了[如何将 Vue 应用部署到 GitHub Pages](/blog/deploy-vue-app-to-github-pages)，考虑以下场景：在你每次对代码变动时，都要手动执行 `npm run build` 操作来构建文件，然后再将构建好的文件推送到 `gh-pages` 分支来重新部署 GitHub Pages。这些操作是一成不变且耗时耗力的，那么能否让机器替代我们来执行它们，好让部署变得“水到渠成”呢？本文将介绍如何使用 [GitHub Actions](https://github.com/features/actions) 来解放我们枯燥的工作。

请注意，本文不是 GitHub Actions 的教程，如果你还不熟悉什么是 GitHub Actions，不妨读一读阮一峰的 [GitHub Actions 入门教程](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)。

## 准备工作

### 1.创建个人访问令牌

首先，你要创建一个用于授权 GitHub Actions 的标识，这就是个人访问令牌（personal access tokens）。关于如何创建这个令牌，请参考官方的[这篇教程](https://docs.github.com/cn/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)。请务必正确创建，因为接下来的配置中要用到。

### 2.创建我们的工作流

在项目的根目录下创建这样的目录：`.github/workflows`，然后在这个目录下面新建一个 `.yml` 文件，文件名可以任意取，比如 `deploy.yml`。

文件的内容参考如下：
```yml
# workflow 的名称。如果省略则默认为当前 workflow 的文件名
name: Venus CI/CD

on:
  push:
    branches: 
      - main

jobs:
  venus-cicd:
    name: Build & deploy venus
    runs-on: ubuntu-latest # 使用最新的 Ubuntu 系统作为编译部署的环境

    steps:
    - name: Checkout codes
      uses: actions/checkout@v2.3.4

    # 设置 node.js 运行环境
    - name: Setup node
      uses: actions/setup-node@v2.1.2
      with:
        node-version: '12.x'

    # 设置缓存依赖，加快下次安装依赖的速度
    - name: Cache node modules
      uses: actions/cache@v2.1.3
      with:
        path: '**/node_modules'
        key: ${{ runner.os }}-node-${{ hashFiles('**/yarn.lock') }}

    # 安装依赖
    - name: Install dependencies
      run: yarn install

    # 构建文件
    - name: Generate files
      run: yarn build

    # 将构建后的文件推送到 gh-pages
    - name: Push to gh-pages
      env:
        # 填写项目所在仓库地址
        GITHUB_REPO: github.com/Chinesee/venus.git
      run: |
        cd ./dist
        git init
        git config --local user.name "LeoKu"
        git config --local user.email "czc12580520@gmail.com"
        git add .
        git commit -m "GitHub Actions Auto Builder at $(date +'%Y-%m-%d %H:%M:%S')"
        git push --force --quiet "https://${{ secrets.ACCESS_TOKEN }}@$GITHUB_REPO" HEAD:gh-pages
```

## 自动化部署

完成了以上两个步骤，以后每当你将代码推送到 `main` 分支时，都会触发 GitHub Actions 来执行工作流。

GitHub Actions 任务列表：

![GitHub Actions 任务列表](https://gitee.com/chinesee/images/raw/master/blog/5.png)

GitHub Actions 任务详情：

![GitHub Actions 任务详情](https://gitee.com/chinesee/images/raw/master/blog/6.png)
