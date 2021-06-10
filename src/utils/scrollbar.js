/**
 * 修改 Window 系统浏览器的滚动条的默认样式，美化效果
 */
void (function styleTheWindowsScrollbar() {
  const IS_WINDOWS = navigator.platform.indexOf('Win') > -1
  if (IS_WINDOWS) {
    const css = `
      ::-webkit-scrollbar {
        width: 8px !important;
        height: 8px !important;
        background-color: transparent;
      }
      
      ::-webkit-scrollbar-thumb {
        background-color: hsla(var(--color-text-100-hsl), 0.5) !important;
        border: none !important;
        border-radius: 4px !important;
      }
      
      ::-webkit-scrollbar-track-piece {
        background-color: var(--color-background) !important;
      }
    `
    const head = document.head || document.getElementsByTagName('head')[0]
    const style = document.createElement('style')
    style.innerText = css
    head.appendChild(style)
  }
})()
