import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

function SEO({
  siteMetadata: seo,
  postData,
  frontmatter: postMeta = postData || {},
  title = postMeta.title,
  description = postMeta.plainTextDescription ||
    postMeta.description ||
    seo.description,
}) {
  return (
    <>
      <Helmet>
        <html lang={seo.language} />

        {title ? (
          <title>{`${postMeta.title} - ${seo.title}`}</title>
        ) : (
          <title>{seo.title}</title>
        )}

        <meta content={description} name="description" />
        <link href={seo.favicon} rel="icon" />
      </Helmet>
    </>
  )
}

export default function SEOWithQuery(props) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          image
          favicon
          language
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
