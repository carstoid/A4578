module.exports = {
  pathPrefix: "/ud-digital-practice",
  siteMetadata: {
    title: `Digital Practice Initiative`,
    name: `Carsten Rodin`,
    description: `Documentation site for UD Digital Practice`,
    author: `@carstoid`,
    date: `July 9, 2020`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `../docs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `../slides`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `../assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-unwrap-images`,
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [],
            }
          },
          // {
          //   resolve: `gatsby-remark-images`,
          //   options: {
          //     maxWidth: 1080,
          //     backgroundColor: `transparent`,
          //     wrapperStyle: `width: 100%; height: 100%; object-fit: contain;`,
          //   },
          // },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `../assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`
  ],
}
