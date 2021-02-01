import React from 'react'

import { ThemeProvider } from './ThemeContext'

export default function App({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
