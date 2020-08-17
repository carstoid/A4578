module.exports = {
  pathPrefix: "/gis-for-design-2020",
  siteMetadata: {
    title: `GIS Lab for Architecture & Urban Design`,
    name: `Carsten Rodin`,
    description: `Class site for design GIS lab`,
    author: `@carstoid`,
    date: `2020-08-00`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `../assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `../pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lectures`,
        path: `../lectures`,
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
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `../assets/favicon.png`, // This path is relative to the root of the site.
    //   },
    // },
    `gatsby-plugin-postcss`
  ],
}
