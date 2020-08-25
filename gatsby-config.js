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
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lectures`,
        path: `${__dirname}/content/lectures/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          // `gatsby-remark-copy-linked-files`,
          `gatsby-remark-unwrap-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              disableBgImage: true,
              disableBgImageOnAlpha: true,
              linkImagesToOriginal: false,
              backgroundColor: 'none',
            },
          },
        ],
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
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
              backgroundColor: `transparent`,
              wrapperStyle: `width: 100%; height: 100%; object-fit: contain;`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gis-2020`,
        short_name: `gis`,
        start_url: `/`,
        // background_color: `#663399`,
        // theme_color: `#663399`,
        //display: `minimal-ui`,
        icon: `content/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`
  ],
}

    // `gatsby-plugin-layout`,
    // `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `markdown-pages`,
    //     path: `../pages`,
    //   },
    // },
    // `gatsby-transformer-sharp`,
