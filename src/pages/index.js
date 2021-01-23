import React from 'react'
import { Link } from 'gatsby'

import Layout from '@/components/layout'
import TextLine from '@/components/TextLine'

import '@/styles/home.scss'

export default function HomePage() {
  return (
    <Layout>
      <div className="home">
        <div className="avatar-box">
          <img
            alt="Avatar"
            className="avatar"
            src="https://gitee.com/chinesee/images/raw/master/img/img_043.png"
            draggable="false"
          />
        </div>

        <h1 className="greeting">Hi, I'm LeoKu 😎</h1>

        <section className="hero-text">
          <TextLine>Good at dreaming</TextLine>
          <TextLine>Indulge in programming</TextLine>
          <TextLine>Love to contribute</TextLine>
        </section>

        <section className="intro-text">
          <p>A front-end developer by now</p>
          <p>Trying various programming languages</p>
          <p>Keep exploring</p>
        </section>

        <Link to="/blog" className="about">
          更多关于我
        </Link>
      </div>
    </Layout>
  )
}
