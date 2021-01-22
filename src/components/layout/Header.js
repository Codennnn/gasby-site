import React from 'react'
import { Link } from 'gatsby'

import DarkToggle from '../DarkToggle'

export default function Header() {
  return (
    <header className="header">
      <div>LeoKu</div>

      <Link to="/blog" className="">
        Blog
      </Link>

      <DarkToggle />
    </header>
  )
}
