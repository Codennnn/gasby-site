import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { LAYOUT } from '~/config/theme'
import navItems from '~/config/nav'
import { isExternal } from '@/utils'

const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 100vw;
  width: ${LAYOUT.sideMenuWidth};
  height: 100vh;
  padding-top: ${LAYOUT.headerHeight};
  background-color: var(--color-background);
  transition: left 0.2s;

  &.show {
    left: calc(100vw - ${LAYOUT.sideMenuWidth});
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
      color: var(--color-primary);
    }
  }
`

export default function AppFooter({ visible }) {
  return (
    <Menu className={visible && 'show'}>
      <NavLinks>
        {navItems.map(({ url, name }) => (
          <div className="nav-item" key={name}>
            {isExternal(url) ? (
              <a href={url} target="_blank" rel="nofollow noopener noreferrer">
                {name}
              </a>
            ) : (
              <Link to={url} partiallyActive activeClassName="active">
                {name}
              </Link>
            )}
          </div>
        ))}
      </NavLinks>
    </Menu>
  )
}
