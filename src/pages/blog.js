import { graphql, Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Layout from '@/components/layout'
import SEO from '@/components/SEO'
import { SCREENS } from '~/config/theme'

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
    margin-top: 4rem;
  }

  .article-title {
    max-width: 450px;
    font-weight: bold;
    font-size: 1.6rem;
  }

  .article-excerpt {
    margin: 1rem 0;
    color: var(--color-text-100);
  }

  .read-more {
    color: var(--color-accent);
    font-weight: 500;
    font-size: 1.1rem;
  }

  @media (min-width: ${SCREENS.md}) {
    .article-title {
      max-width: 450px;
      font-weight: bold;
      font-size: 1.6rem;
      background: linear-gradient(transparent, transparent),
        linear-gradient(90deg, var(--color-text), var(--color-text));
      background-repeat: no-repeat;
      background-position: 100% 100%, 0 100%;
      background-size: 0% 10px, 0 3px;
      transition: 0.25s background-size;
    }

    &:hover {
      .article-title {
        background-size: 0 3px, 100% 3px;
      }
    }
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
              <Article key={post.id} to={post.fields.slug}>
                <a className="article-title" href="void">
                  {post.frontmatter.title}
                </a>

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
