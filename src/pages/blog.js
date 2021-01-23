import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '@/components/layout'

import '@/styles/blog.scss'

export default function BlogPage({ data }) {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <div className="blog">
        <div>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <Link
                  to={post.fields.slug}
                  className="blog-post-article"
                  key={post.id}
                >
                  <h3 className="article-title">{post.frontmatter.title}</h3>

                  <p className="article-excerpt">{post.excerpt}</p>

                  <p className="read-more">查看全文</p>
                </Link>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMdx {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
