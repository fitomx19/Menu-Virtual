module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Restaurante-Menu",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "f81fbfa894c30509e5ef2ad3396714",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/restaurante.png",
        name: 'Menu Virtual',
        short_name: 'Menu',
        start_url: '/',
        background_color: '#FFFFFF',
        display: 'minimal-ui',
      },
    },
    "gatsby-plugin-sharp",
    `gatsby-plugin-emotion`,
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
