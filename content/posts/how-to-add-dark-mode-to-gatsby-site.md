---
title: 如何为你的 Gatsby 网站添加夜晚（深色）模式
createdAt: '2021-02-28'
---


为网站建造深色模式是一个很好的用户体验。

一个良好的设计体验应该是如下：

* 用户可以点击切换按钮来选择自己喜好的模式
* 用户的偏好应该被保存下来，以便于在下次浏览时显示正确的主题
* 首次加载主题时，应该根据用户当前系统的主题来设置同样的主题
* 网站开始渲染时不能出现闪烁，即使用户已经选择了主题
* 网站不能出现错误的切换按钮状态

## 基本逻辑

根据上面列出的一些条件，我们写一个方法来帮助我们更新颜色主题。

```js
function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem('color-mode')
  const hasPersistedPreference = typeof persistedColorPreference === 'string'

  // 如果用户已经明确地选择了 light/dark，
  // 那我们应该使用这个值。
  if (hasPersistedPreference) {
    return persistedColorPreference;
  }

  // 如果没有，就检查一下媒体查询，看看用户的偏好。
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean'
  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light'
  }

  // 最后，如果以上条件都不符合，则将主题默认设置为 'light'。
  return 'light'
}
```

在 React 中，我们还需要一个状态。

```jsx
function getInitialColorMode() {
  /* 与上面相同。为了简介起见，省略 */
}

export const ThemeContext = React.createContext()
export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(getInitialColorMode);
  const setColorMode = (value) => {
    rawSetColorMode(value)

    // 持久化存储
    window.localStorage.setItem('color-mode', value)
  };
  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

...
