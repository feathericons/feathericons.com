module.exports = {
  siteMetadata: {
    title: 'Feather – Simply beautiful open source icons',
    description:
      'Feather is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Feather',
        short_name: 'Feather',
        description: 'Simply beautiful open source icons',
        start_url: '/',
        theme_color: `#06f`,
        background_color: `#fff`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-63028889-4',
        anonymize: true,
      },
    },
  ],
}
