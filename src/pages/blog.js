import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { SCREENS } from '~/config/theme'
import SEO from '@/components/SEO'
import Layout from '@/components/layout'

const BlogList = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 6rem 0;

  @media (max-width: ${SCREENS.sm}) {
    max-width: none;
    padding: 1rem;
  }
`

const Article = styled(Link)`
  display: block;

  & ~ & {
    margin-top: 3rem;
  }

  .article-title {
    max-width: 450px;
    font-weight: bold;
    font-size: 1.6rem;
  }

  .article-excerpt {
    margin: 1rem 0;
    color: var(--color-text100);
  }

  .read-more {
    color: var(--color-accent);
    font-weight: 500;
    font-size: 1.1rem;
  }

  @media (max-width: ${SCREENS.sm}) {
    & ~ & {
      margin-top: 2.5rem;
    }

    .article-title {
      font-size: 1.2rem;
    }

    .article-excerpt {
      font-size: 0.9rem;
    }
  }
`

export default function BlogPage({ data }) {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <SEO />

      <BlogList>
        {posts
          .sort((a, b) => {
            return (
              new Date(b.node.frontmatter.createdAt).getTime() -
              new Date(a.node.frontmatter.createdAt).getTime()
            )
          })
          .map(({ node: post }) => {
            return (
              <Article to={post.fields.slug} key={post.id}>
                <h3 className="article-title">{post.frontmatter.title}</h3>

                <p className="article-excerpt">{post.excerpt}</p>

                <p className="read-more">查看全文</p>
              </Article>
            )
          })}
      </BlogList>
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
            createdAt
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
