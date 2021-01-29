import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

function SEO({
  siteMetadata: seo,
  postData,
  metaImage,
  frontmatter: postMeta = postData || {},
  title = postMeta.title,
  description = postMeta.plainTextDescription ||
    postMeta.description ||
    seo.description,
  image = `${metaImage}`,
}) {
  return (
    <>
      <Helmet>
        {title ? (
          <title>{`${postMeta.title} - ${seo.title}`}</title>
        ) : (
          <title>{seo.title}</title>
        )}
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
    </>
  )
}

function SEOWithQuery(props) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          image
          author {
            name
          }
          social {
            wechat
            weibo
          }
        }
      }
    }
  `)
  return <SEO siteMetadata={siteMetadata} {...props} />
}

export default SEOWithQuery
