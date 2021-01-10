import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'

import DocsContent from './docs-content'

const shortcodes = { Link }

export default function DocsLayout({ data: { mdx } }) {
  console.log(mdx)
  return (
    <>
      <aside>
        <Link activeStyle={{ color: 'red' }} to="/blog/blog-1" partiallyActive>
          /blog/blog-1
        </Link>
        <Link activeStyle={{ color: 'red' }} to="/blog/blog-2" partiallyActive>
          /blog/blog-2
        </Link>
      </aside>
      <header>header</header>
      <main>
        <DocsContent>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </DocsContent>
      </main>
    </>
  )
}

export const pageQuery = graphql`
  query DocsQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
