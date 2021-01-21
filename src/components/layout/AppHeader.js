import React from 'react'
import { Link } from 'gatsby'

import DarkToggle from '../DarkToggle'

export default function AppHeader() {
  return (
    <div className="app-header">
      <div>LeoKu</div>

      <Link to="/blog" className="">
        Blog
      </Link>

      <DarkToggle />
    </div>
  )
}
