import React, { useState } from 'react'
import styled from 'styled-components'

import { LAYOUT } from '~/config/theme'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import SideMenu from './AppMenu'

const App = styled.div`
  position: relative;
  right: 0;
  padding-top: ${LAYOUT.headerHeight};
  transition: right 0.2s;

  &.show-menu {
    right: ${LAYOUT.sideMenuWidth};
  }
`

const Main = styled.main`
  min-height: calc(100vh - ${LAYOUT.headerHeight} - ${LAYOUT.footerHeight});
`

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <App className={showMenu && 'show-menu'}>
        <AppHeader toggleMenu={toggleMenu} />

        <Main>{children}</Main>

        <AppFooter />
      </App>

      <SideMenu visible={showMenu} />
    </>
  )
}
