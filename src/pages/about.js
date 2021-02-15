import React from 'react'
import styled from 'styled-components'

import { COLORS, SCREENS } from '~/config/theme'
import { ThemeContext } from '@/components/ThemeContext'
import SEO from '@/components/SEO'
import Layout from '@/components/layout'

const About = styled.div`
  position: relative;
  z-index: 110;
  width: 800px;
  margin: 0 auto;
  padding: 6rem 0;

  @media (max-width: ${SCREENS.sm}) {
    width: auto;
    padding: 3rem 1.5rem;
  }
`

const Title = styled.h1`
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 1.5rem;
`

const Paragraph = styled.div`
  margin-bottom: 2rem;
  font-size: 18px;
  line-height: 1.8;
`

function CanvasConfetti() {
  const { colorMode } = React.useContext(ThemeContext)
  const canvasRef = React.useRef(null)

  React.useEffect(() => {
    if (!colorMode) return

    import('canvas-confetti').then(confetti => {
      const myConfetti = confetti.create(canvasRef.current, {
        resize: true,
        disableForReducedMotion: true,
      })

      const deadline = performance.now() + 1 * 1000
      console.log(colorMode)

      const colors = [COLORS['primary-hex'][colorMode], '#a864fd', '#ff718d']

      void (function frame() {
        myConfetti({
          particleCount: colors.length,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        })
        myConfetti({
          particleCount: colors.length,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        })

        if (performance.now() < deadline) {
          requestAnimationFrame(frame)
        }
      })()
    })
  }, [colorMode])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', width: '100vw', height: '100vh' }}
    />
  )
}

export default function AboutPage() {
  return (
    <Layout>
      <SEO />

      <CanvasConfetti />
      <About>
        <Title>😉，欢迎来到我的个人博客</Title>

        <Paragraph>
          我叫陈梓聪，2020
          年毕业于软件工程专业后，我开始作为一名前端开发者参加工作，目前居住在东莞。
        </Paragraph>

        <Paragraph>
          作为一名前端开发者，我特别欣赏那些别具一格的网站，并且我最大的爱好就是收集这些网站，以便于在我构思自己的作品时能带给我启发。我热爱设计，无论是在我的作品还是我的生活空间，我都会努力让它们拥有最佳的体验。
        </Paragraph>

        <Paragraph>
          如果你想联系我，这里有我的联系方式：
          <ul>
            <li>微信：leoku_new</li>
            <li>
              新浪微博：
              <a
                style={{ color: 'inherit' }}
                href="https://weibo.com/leoku4"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                令狐聪Leoku
              </a>
            </li>
            <li>邮箱：czc12580520@gmail.com</li>
          </ul>
        </Paragraph>
      </About>
    </Layout>
  )
}
