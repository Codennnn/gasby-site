import React from 'react'
import styled from 'styled-components'

import { LAYOUT } from '~/config/theme'

const Footer = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${LAYOUT.footerHeight};
  color: hsla(var(--color-text-hsl), 0.5);
`

export default function AppFooter() {
  return (
    <Footer>
      <div>Made with Gatsby</div>
    </Footer>
  )
}
