---
title: 如何使用码云作为免费图床
createdAt: '2019-08-16'
---

## 一、创建代码仓库

为你的仓库取一个简短的名字，并设为公开，如果是私有仓库的话将访问不到图片。

![img](https://gitee.com/chinesee/images/raw/master/img/img_001.png)

## 二、上传你的图片

自定义文件夹用于分类图片，像管理你的代码一样，将图片 push 到仓库。

![img](https://gitee.com/chinesee/images/raw/master/img/img_008.png)

在 VS Code 里面操作，这样既能预览图片，又能将简化 commit 和 push 步骤。

![img](https://gitee.com/chinesee/images/raw/master/img/img_009.png)

## 三、修改图片 URL

在仓库中找到你上传的图片。

![img](https://gitee.com/chinesee/images/raw/master/img/img_010.png)

将 URL 中的 `blob` 改为 `raw` 就能在页面中引用这张图片了。

```html
<img src="https://gitee.com/chinesee/images/raw/master/img/img_002.png" />
```
