import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { LAYOUT } from '~/config/theme'
import { isExternal } from '@/utils'
import DarkModeToggle from '../DarkModeToggle'

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

  &::before,
  &::after {
    position: absolute;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    content: '';
  }

  &::before {
    backdrop-filter: blur(4px) saturate(200%);
  }

  &::after {
    background: hsla(0, 0%, 100%, 0.66667);
  }

  .site-name {
    position: absolute;
    left: ${LAYOUT.headerSidePadding};
    margin-right: 4rem;
    font-weight: bold;
    font-size: 1.5rem;
  }

  .nav-links {
    display: flex;
    align-items: center;

    .nav-item {
      padding: 0 1.2rem;
    }
  }

  .actions {
    position: absolute;
    right: 1.5rem;
  }
`

export default function AppHeader() {
  const navItems = [
    {
      url: '/blog',
      name: 'Blog',
    },
    {
      url: '/about',
      name: 'About',
    },
    {
      url: 'https://github.com/Codennnn',
      name: 'GitHub',
    },
  ]

  return (
    <Header className="header">
      <img src="../../images/logo.png" alt="Logo" />
      <Link className="site-name" to="/">
        LeoKu
      </Link>

      <nav className="nav-links">
        {navItems.map(({ url, name }) => (
          <div className="nav-item" key={name}>
            {isExternal(url) ? (
              <a href={url} target="_blank" rel="nofollow noopener noreferrer">
                {name}
              </a>
            ) : (
              <Link to={url}>{name}</Link>
            )}
          </div>
        ))}
      </nav>

      <div className="actions">
        <DarkModeToggle />
      </div>
    </Header>
  )
}
