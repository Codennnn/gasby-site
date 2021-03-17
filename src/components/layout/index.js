import React, { useState } from 'react'
import styled from 'styled-components'

import { LAYOUT } from '~/config/theme'

import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import Sidebar from './Sidebar'

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
    opacity: 0.25;
  }
`

export default function Layout({ children }) {
  const [showAside, setShowAside] = useState(false)

  return (
    <>
      <AppLayout className={showAside && 'show-aside'}>
        <AppHeader
          toggleAside={() => {
            setShowAside(!showAside)
          }}
        />

        <Main className={showAside && 'show-aside'}>{children}</Main>

        <AppFooter />
      </AppLayout>

      <Sidebar visible={showAside} />
    </>
  )
}
