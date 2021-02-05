import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { LAYOUT, SCREENS } from '~/config/theme'
import SEO from '@/components/SEO'
import Layout from '@/components/layout'
import TextLine from '@/components/TextLine'
import Underscore from '@/assets/underscore.svg'

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - ${LAYOUT.headerHeight} - ${LAYOUT.footerHeight});
  margin: 0 auto;
`

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  background-color: rgba(var(--color-primary-rgb), 0.3);
  border-radius: 50%;

  .avatar {
    width: 64%;
    user-select: none;
  }
`

const Greeting = styled.h1`
  margin-top: 2.5rem;
  font-weight: bold;
  font-size: 1.5rem;

  @media (max-width: ${SCREENS.sm}) {
    font-size: 1.2rem;
  }
`

const HeroText = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem 0;
  font-weight: bold;
  font-size: 5rem;

  @media (max-width: ${SCREENS.sm}) {
    font-size: 1.8rem;
  }
`

const Underline = styled(Underscore)`
  position: absolute;
  top: -0.6em;
  left: 1.4em;
  z-index: -1;
  transform: scale(1.1);

  @media (max-width: ${SCREENS.sm}) {
    display: none;
  }
`

const IntroText = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.5;

  @media (max-width: ${SCREENS.sm}) {
    font-size: 0.8rem;
  }
`

const AboutMe = styled(Link)`
  display: block;
  width: 10rem;
  height: 3rem;
  margin-bottom: 2rem;
  color: var(--color-background);
  line-height: 3rem;
  text-align: center;
  background-color: var(--color-text);
  border-radius: 1.5rem;
  user-select: none;
`

export default function HomePage() {
  return (
    <Layout>
      <SEO />

      <Home>
        <Avatar>
          <img
            alt="Avatar"
            className="avatar"
            draggable="false"
            src="https://gitee.com/chinesee/images/raw/master/img/img_043.png"
          />
        </Avatar>

        <Greeting>Hi, I'm LeoKu 😎</Greeting>

        <HeroText>
          <TextLine>Good at dreaming</TextLine>
          <Underline />
          <TextLine>Indulge in programming</TextLine>
          <TextLine>Love to contribute</TextLine>
        </HeroText>

        <IntroText>
          <p>A front-end developer by now</p>
          <p>Trying various programming languages</p>
          <p>Keep exploring</p>
        </IntroText>

        <AboutMe to="/about">更多关于我</AboutMe>
      </Home>
    </Layout>
  )
}
