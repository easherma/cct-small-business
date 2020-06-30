module.exports = {
  siteMetadata: {
    title: `The Fund for Equitable Busness Growth`,
    description: `Creating a marketplace of services for entrepreneurs of color in the Chicago region to close the racial and ethnic wealth gap and build a more just, equitable and resilient society.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        defaultQuality: 30,
        cropFocus: `CENTER`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
