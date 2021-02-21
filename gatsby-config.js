module.exports = {
  siteMetadata: {
    title: 'kitchen-tracker',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-postcss',
  ],
}
