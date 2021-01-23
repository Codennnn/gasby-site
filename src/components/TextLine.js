import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.p`
  position: relative;
  color: var(--color-text);
`

const MainText = styled.span`
  position: relative;
  z-index: 1;
  display: inline-block;
`

const HoverText = styled.span`
  position: absolute;
  left: 0;
  z-index: 2;
  display: inline-block;
  color: var(--color-primary);
  transition: clip-path 500ms;
  clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  user-select: none;

  ${Wrapper}:hover & {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
`

export default function TextLine({ children }) {
  return (
    <Wrapper>
      <MainText>{children}</MainText>
      <HoverText>{children}</HoverText>
    </Wrapper>
  )
}
