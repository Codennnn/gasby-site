import React from 'react'
import { Link } from 'gatsby'

import AppHeader from '../components/layout/AppHeader'

import '../styles/home.scss'

export default function HomePage() {
  return (
    <div className="home">
      <AppHeader />

      <h1>Hi, I'm LeoKu 🖖</h1>

      <p className="text text-2">
        <span className="point"> Good at </span>
        dreaming <br />
        Indulge in programming <br />
        Love to contribute
      </p>

      <p className="text text-3">
        A front-end developer by now <br />
        Trying various programming languages <br />
        Keep exploring
      </p>

      <Link to="/blog" className="about">
        更多关于我
      </Link>
    </div>
  )
}
