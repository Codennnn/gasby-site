import React from 'react'
import styled from 'styled-components'

import { LAYOUT } from '~/config/theme'
import AppHeader from './AppHeader'

const App = styled.div`
  padding-top: ${LAYOUT.headerHeight};
`

export default function Layout({ children }) {
  return (
    <App className="app">
      <AppHeader />

      <main>{children}</main>
    </App>
  )
}
