import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { isExternal } from '@/utils'
import navItems from '~/config/nav'
import { LAYOUT } from '~/config/theme'

import DarkModeToggle from '../DarkModeToggle'

const Toggler = styled.div`
  position: absolute;
  top: calc(${LAYOUT.headerHeight} + 2rem);
  right: 3.2rem;
`

const SideNav = styled.aside`
  position: fixed;
  top: 0;
  left: 100vw;
  width: ${LAYOUT.sidebarWidth};
  height: 100vh;
  padding-top: ${LAYOUT.headerHeight};
  background-color: var(--color-background);
  visibility: hidden;
  transition: left 0.2s ease-out;

  &.show {
    left: calc(100vw - ${LAYOUT.sidebarWidth});
    visibility: visible;
  }
`

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  padding: 0 2rem;
  font-weight: bold;
  font-size: 1.2rem;

  .nav-item {
    margin: 1.2rem 0;
    padding: 0 1.2rem;

    a.active {
      color: var(--color-accent);
    }
  }
`

/**
 * 移动端侧边导航栏
 */
export default function MobileSideNav({ visible = false }) {
  return (
    <SideNav className={visible && 'show'}>
      <Toggler>
        <DarkModeToggle />
      </Toggler>

      <NavLinks>
        {navItems.map(({ url, name }) => (
          <div key={name} className="nav-item">
            {isExternal(url) ? (
              <a href={url} rel="nofollow noopener noreferrer" target="_blank">
                {name}
              </a>
            ) : (
              <Link partiallyActive activeClassName="active" to={url}>
                {name}
              </Link>
            )}
          </div>
        ))}
      </NavLinks>
    </SideNav>
  )
}
