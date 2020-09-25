module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Storybook Starter`,
    description: `Gatsby starter with Typescript, Storybook and Styled Components`,
    author: `@viethle126`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-typescript-storybook`,
        short_name: `Starter`,
        start_url: `/`,
        background_color: `#040C0C`,
        theme_color: `#EC1C23`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
  ],
}
