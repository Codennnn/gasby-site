import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'

import Layout from '@/components/layout'
import SEO from '@/components/SEO'

import '@/styles/article.scss'

const shortcodes = { Link }

export default function BlogLayout({ data: { mdx } }) {
  return (
    <Layout>
      <SEO postData={mdx.frontmatter} />

      <article className="blog-article">
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </article>
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
      }
    }
  }
`
