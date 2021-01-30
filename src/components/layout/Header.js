import React from 'react'
import { Link } from 'gatsby'

import { isExternal } from '../../utils'
import DarkToggle from '../DarkToggle'

export default function Header() {
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
    <header className="header">
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
        <DarkToggle />
      </div>
    </header>
  )
}
