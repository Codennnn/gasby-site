---
title: 使用 requestAnimationFrame 替代 setInterval 和 setTimeout
createdAt: '2021-02-06'
---

requestAnimationFrame() 是一个专门的循环函数，旨在浏览器中高效运行动画。它基本上是现代版本的 setInterval() —— 它在浏览器重新加载显示内容之前执行指定的代码块，从而允许动画以适当的帧速率运行，不管其运行的环境如何。

## 实现 setInterval

```js
function requestInterval(callback, delay) {
  let dateNow = Date.now,
    requestAnimation = window.requestAnimationFrame,
    start = dateNow(),
    stop

  void (function internal() {
    if (dateNow() - start >= delay) {
      callback()
      start += delay
    }
    stop || requestAnimation(internal)
  })()

  return {
    clear() {
      stop = true
    },
  }
}

// 调用方式
const handle = requestInterval(() => {
  // ...
}, 1000)

// 清除计时器
handle.clear()
```

## 实现 setTimeout

只需要将 requestAnimation 放在 else 判断里面就可以实现 setTimeout 的效果了。

```js {diff}
void (function timeout() {
  if (dateNow() - start >= delay) {
    callback()
    start += delay
  } else {
    stop || requestAnimation(timeout)
  }
})()
```
