const COLORS_HSL = {
  text: {
    light: '218, 17%, 35%',
    dark: '211, 19%, 70%',
  },
  background: {
    light: '0deg, 0%, 100%',
    dark: '216, 14%, 14%',
  },
  accent: {
    light: '36, 94%, 59%',
    dark: '30, 100%, 80%',
  },
  primary: {
    light: '36, 94%, 59%',
    dark: '210, 16%, 82%',
  },
  secondary: {
    light: '250, 100%, 50%',
    dark: '190, 100%, 40%',
  },
  'text-100': {
    light: '180, 8%, 35%',
    dark: '210, 11%, 47%',
  },
  'text-900': {
    light: '0, 0%, 95%',
    dark: '240, 2%, 30%',
  },
  'gray-300': {
    light: '218, 17%, 61%',
    dark: '0deg, 0%, 30%',
  },
  'gray-500': {
    light: '0deg, 0%, 50%',
    dark: '0deg, 0%, 50%',
  },
  'gray-700': {
    light: '0deg, 0%, 30%',
    dark: '0deg, 0%, 70%',
  },
}

export const COLORS = (hsl => {
  let colors = {}
  Reflect.ownKeys(hsl).forEach(k => {
    colors[k] = {
      light: `hsl(${hsl[k]['light']})`,
      dark: `hsl(${hsl[k]['dark']})`,
    }
    colors[`${k}-hsl`] = hsl[k]
  })
  return colors
})(COLORS_HSL)

export const SCREENS = {
  sm: '480px',
  md: '768px',
  lg: '976px',
  xl: '1440px',
}

export const LAYOUT = {
  headerHeight: '3.6rem',
  headerSidePadding: '1.5rem',
  footerHeight: '3.6rem',
  sidebarWidth: '60vw',
}

export const COLOR_MODE_KEY = 'color-mode'

export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode'
