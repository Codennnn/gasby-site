import React from 'react'

import SEO from '@/components/SEO'
import Layout from '@/components/layout'

import '@/styles/home.scss'

export default function HomePage() {
  return (
    <Layout>
      <SEO />

      <div className="about">
        <h1 className="greeting">Hi, I'm LeoKu 😎</h1>
      </div>
    </Layout>
  )
}
