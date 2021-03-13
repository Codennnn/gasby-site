import { MDXProvider } from '@mdx-js/react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import styled from 'styled-components'

import Layout from '@/components/layout'
import SEO from '@/components/SEO'
import { SCREENS } from '~/config/theme'

const Article = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 0;

  h2 {
    margin-top: -3.1rem;
    padding-top: 4.6rem;
    font-weight: bold;
    font-size: 1.65rem;
  }

  p {
    margin: 1.5rem 0;
    line-height: 1.8;
  }

  a {
    color: var(--color-accent);
  }

  img {
    border-radius: 0.5rem;
    box-shadow: 0 0 1.5rem hsla(var(--color-text-hsl), 0.1);
  }

  @media (max-width: ${SCREENS.sm}) {
    h2 {
      font-size: 1.3rem;
    }

    padding: 4rem 1.5rem;
  }
`

const Title = styled.h1`
  margin-bottom: 3rem;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 1.5;
  word-wrap: break-word;
`

const Date = styled.div`
  text-align: ceter;
`

const shortcodes = { Link }

export default function BlogLayout({ data: { mdx } }) {
  return (
    <Layout>
      <SEO postData={mdx.frontmatter} />

      <Article>
        <Title>{mdx.frontmatter.title}</Title>
        <Date>
          更新于 {mdx.frontmatter.updatedAt || mdx.frontmatter.createdAt}
        </Date>

        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        createdAt
        updatedAt
      }
    }
  }
`
