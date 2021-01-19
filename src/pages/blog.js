import React from 'react'
import { Link, graphql } from 'gatsby'

export default function BlogPage({ data }) {
  const { edges: posts } = data.allMdx

  return (
    <div>
      <h1>Hi people</h1>
      <aside>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h2>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h2>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p>
              </div>
            )
          })}
      </aside>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMdx {
      edges {
        node {
          excerpt(pruneLength: 250)
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
