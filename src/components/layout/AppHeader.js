import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Menu from '@/assets/menu.svg'
import { ThemeContext } from '@/components/ThemeContext'
import { isExternal } from '@/utils'
import navItems from '~/config/nav'
import { LAYOUT, SCREENS } from '~/config/theme'

import DarkModeToggle from '../DarkModeToggle'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
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

    @media (max-width: ${SCREENS.sm}) {
      font-size: 1.2rem;
    }
  }
`

const NavLinks = styled.nav`
  display: flex;
  align-items: center;

  .nav-item {
    padding: 0 1.2rem;

    a.active {
      color: var(--color-accent);
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

export default function AppHeader({ toggleAside }) {
  const [isMobile, setIsMobile] = useState(true)
  const { colorMode } = React.useContext(ThemeContext)

  useEffect(() => {
    ;(function () {
      var throttle = function (type, name, obj) {
        obj = obj || window
        var running = false
        var func = function () {
          if (running) {
            return
          }
          running = true
          requestAnimationFrame(function () {
            obj.dispatchEvent(new CustomEvent(name))
            running = false
          })
        }
        obj.addEventListener(type, func)
      }

      throttle('resize', 'optimizedResize')
    })()

    const event = () => {
      setIsMobile(window.screen.width <= 480)
    }

    event()

    window.addEventListener('optimizedResize', event)
  }, [])

  return (
    <Header className="header">
      <Link className="site-name" to="/">
        <img
          alt="Logo"
          className="logo"
          src="/logo.png"
          style={{ opacity: colorMode === 'dark' ? 0.85 : 1 }}
        />
        leoku.top
      </Link>

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

      <Actions className="actions">
        {!isMobile && <DarkModeToggle />}

        <Menu
          className="toggle-menu"
          onClick={() => {
            toggleAside?.()
          }}
        />
      </Actions>
    </Header>
  )
}
