import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { LAYOUT, SCREENS } from '~/config/theme'
import navItems from '~/config/nav'
import DarkModeToggle from '../DarkModeToggle'
import Menu from '@/assets/menu.svg'
import { isExternal } from '@/utils'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${LAYOUT.headerHeight};
  padding: 0 ${LAYOUT.headerSidePadding};
  color: var(--color-text);
  background-color: var(--color-background);

  &::before,
  &::after {
    position: absolute;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    content: '';
  }

  /* &::before {
    backdrop-filter: blur(4px) saturate(200%);
  } */

  /* &::after {
    background: var(--color-bg);
  } */

  .site-name {
    position: absolute;
    left: ${LAYOUT.headerSidePadding};
    display: flex;
    align-items: center;
    margin-right: 4rem;
    font-weight: bold;
    font-size: 1.5rem;

    .logo {
      width: 2.5rem;
      margin-right: 1rem;
    }
  }
`

const NavLinks = styled.nav`
  display: flex;
  align-items: center;

  .nav-item {
    padding: 0 1.2rem;

    a.active {
      color: var(--color-primary);
    }
  }

  @media (max-width: ${SCREENS.sm}) {
    display: none;
  }
`

const Actions = styled.div`
  position: absolute;
  right: 1.5rem;
  display: flex;
  align-items: center;

  .toggle-menu {
    display: none;
    margin-left: 1rem;
    fill: #fff;
    stroke: #fff;
  }

  @media (max-width: ${SCREENS.sm}) {
    .toggle-menu {
      display: block;
    }
  }
`

export default function AppHeader({ toggleMenu }) {
  return (
    <Header className="header">
      <Link className="site-name" to="/">
        <img src="/logo.png" alt="Logo" className="logo" />
        LeoKu
      </Link>

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

      <Actions className="actions">
        <DarkModeToggle />

        <Menu
          className="toggle-menu"
          onClick={() => {
            toggleMenu?.()
          }}
        />
      </Actions>
    </Header>
  )
}
