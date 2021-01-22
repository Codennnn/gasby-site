import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
  return (
    <footer className="footer">
      <div>LeoKu</div>

      <Link to="/blog" className="">
        Blog
      </Link>
    </footer>
  )
}
