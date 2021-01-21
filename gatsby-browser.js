import React from 'react'

import './src/styles/reset.css'
import './src/styles/code.scss'
import './src/styles/code-theme.scss'
import './src/styles/app.scss'
import './src/styles/layout.scss'

import App from './src/components/App'

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>
}
