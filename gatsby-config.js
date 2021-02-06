const path = require('path')
const config = require('./config/website')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    favicon: config.siteIcon,
    language: config.lang,
    author: { name: config.author },
    keywords: [
      'Software Engineer',
      'React Training',
      'Testing JavaScript Training',
    ],
    image: config.siteLogo,
    social: {
      wechat: config.wechat,
      weibo: config.weibo,
      github: config.github,
    },
  },

  plugins: [
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '~': path.resolve(__dirname),
          '@': path.resolve(__dirname, 'src'),
        },
      },
    },

    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts/`,
      },
    },

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        remarkPlugins: [require('remark-external-links')],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },

    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#f9a933',
        showSpinner: false,
      },
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}
