import React from 'react'
import styled from 'styled-components'

import { LAYOUT } from '~/config/theme'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

const App = styled.div`
  padding-top: ${LAYOUT.headerHeight};
`

const Main = styled.main`
  min-height: calc(100vh - ${LAYOUT.headerHeight} - ${LAYOUT.footerHeight});
`

export default function Layout({ children }) {
  return (
    <App className="app">
      <AppHeader />

      <Main>{children}</Main>

      <AppFooter />
    </App>
  )
}
