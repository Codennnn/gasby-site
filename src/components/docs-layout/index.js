import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'

import DocsContent from './docs-content'

const shortcodes = { Link }

export default function DocsLayout({ data: { mdx } }) {
  return (
    <>
      <main>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>
            <DocsContent>{mdx.body}</DocsContent>
          </MDXRenderer>
        </MDXProvider>
      </main>
    </>
  )
}

// export const pageQuery = graphql`
//   query BlogPostQuery($id: String) {
//     mdx(id: { eq: $id }) {
//       id
//       body
//       frontmatter {
//         title
//       }
//     }
//   }
// `
