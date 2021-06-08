import React, { useState } from 'react'
import styled from 'styled-components'

import { LAYOUT } from '~/config/theme'

import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import MobileSideNav from './MobileSideNav'

const AppLayout = styled.div`
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
    opacity: 0.3;
    filter: blur(1px);
  }
`

export default function Layout({ children }) {
  const [showSideNav, setShowSideNav] = useState(false)

  return (
    <>
      <AppLayout className={showSideNav && 'show-aside'}>
        <AppHeader
          toggleAside={() => {
            setShowSideNav(!showSideNav)
          }}
        />

        <Main className={showSideNav && 'show-aside'}>{children}</Main>

        <AppFooter />
      </AppLayout>

      <MobileSideNav visible={showSideNav} />
    </>
  )
}
