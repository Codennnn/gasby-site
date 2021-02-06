import React, { useState } from 'react'
import styled from 'styled-components'

import { LAYOUT } from '~/config/theme'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import Sidebar from './Sidebar'

const App = styled.div`
  position: relative;
  right: 0;
  padding-top: ${LAYOUT.headerHeight};
  transition: right 0.2s ease-out;

  &.show-aside {
    right: ${LAYOUT.sidebarWidth};
  }
`

const Main = styled.main`
  min-height: calc(100vh - ${LAYOUT.headerHeight} - ${LAYOUT.footerHeight});
  transition: opacity 0.2s ease-out;

  &.show-aside {
    opacity: 0.25;
  }
`

export default function Layout({ children }) {
  const [showAside, setShowAside] = useState(false)

  return (
    <>
      <App className={showAside && 'show-aside'}>
        <AppHeader
          toggleAside={() => {
            setShowAside(!showAside)
          }}
        />

        <Main className={showAside && 'show-aside'}>{children}</Main>

        <AppFooter />
      </App>

      <Sidebar visible={showAside} />
    </>
  )
}
