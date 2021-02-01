import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Footer = styled.footer`
  position: relative;
`

export default function AppFooter() {
  return (
    <Footer>
      <div>LeoKu</div>

      <Link to="/blog" className="">
        Blog
      </Link>
    </Footer>
  )
}
