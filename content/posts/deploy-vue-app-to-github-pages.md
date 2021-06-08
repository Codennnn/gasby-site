---
title: 如何将 Vue 应用部署到 GitHub Pages
createdAt: '2020-08-12'
---

当你完成了一个只有静态内容的网站如个人博客或网页模板，你想发布到网络上供别人访问。通常你需要部署到一个 Http 服务器上，比如阿里云、腾讯云等市场上各种云服务器，然而单独维护一个服务器付出的精力和金钱是巨大的，而 GitHub Pages 完全能胜任这项工作。

## 为什么选择 GitHub Pages

作为当下最流行的静态站点托管平台，GitHub Pages 拥有以下让人交口称誉的理由：

- 免费使用，可以帮你省下昂贵的云服务器费用
- 无需与服务器打交道，完全简单的操作步骤
- 可以为你自己的网站绑定自定义域名
- 直接从你的 GitHub 仓库托管，只需编辑、推送，你的更改就会立即生效

## 发布你的网站

已经准备好开始了吗？如果你对 GitHub Pages 的操作还不熟悉，那么请跟随以下步骤来逐步完成你的网站部署。

### 将构建文件发布到 GitHub

这里的构建文件指的是运行 `npm run build` 生成的 `dist` 目录，我们要托管到 GitHub Pages 的就是这个目录下的内容。

:::tip 注意
在 build 之前，请将 publicPath 设为 `/[仓库名称]/`，否则 GitHub Pages 将无法正常找到资源文件。
:::

为了不污染主分支的文件结构，我们推荐在远程仓库新建一个分支专门用来推送 `dist` 目录，并将这个分支命名为 `gh-pages`。为了做到这一点，我们使用了 [push-dir](https://github.com/L33T-KR3W/push-dir)，它能帮助我们将某个目录的内容推送到远程分支。

首先在项目内安装这个依赖:

```sh
npm install push-dir --save-dev
```

接着我们在 `package.json` 中添加一条新的脚本命令：

```json
{
  "scripts": {
    "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup"
  }
}
```

这个命令的意思是将 `dist` 目录推送到 `gh-pages`，完了之后删除本地对应的分支。运行 `npm run deploy` 成功后，你应该能在 GitHub 上看到这个分支的内容了。

![gh-pages 分支内容](https://gitee.com/chinesee/images/raw/master/blog/1.png)

### 设置 GitHub Pages

进入我们项目所在的仓库设置里面，找到 `Options -> GitHub Pages`，将 GitHub Pages 构建在 `gh-pages` 上，像这样设置：

![GitHub Pages 设置](https://gitee.com/chinesee/images/raw/master/blog/2.png)

设置成功后，你的网站就能通过 `https://[GitHub 账号名].github.io/[仓库名]/` 这样的格式访问了。通常到这一步就足够了，不过如果你希望为你的网站自定义域名，那么请看下一节的内容。

### 自定义域名

假设你已经拥有了自己的域名，那么你可以对你的 GitHub Pages 网站使用子域名，子域名配置是通过 DNS 提供商使用 CNAME 记录配置的，即子域名可以通过添加一个 CNAME 类型的主机记录，记录值为 `[GitHub 账号].github.io` 设置。比如本站的父级域名是 `leoku.top`，子域名为 `docs`。

![GitHub Pages 设置](https://gitee.com/chinesee/images/raw/master/blog/3.png)

完成上面的操作后，在 `public` 文件夹下创建一个名为 `CNAME` 的文件，然后在里面写入你的域名，比如：

```
venus.leoku.top
```

接下来就是 `npm run build` 和 `npm run deploy` 的步骤了，最后再在仓库设置中填入自定义域名就完成所有操作了。

:::tip 注意
使用自定义域名的话就不用再设置 publicPath 了，保持默认即可。
:::

![GitHub Pages 设置](https://gitee.com/chinesee/images/raw/master/blog/4.png)
