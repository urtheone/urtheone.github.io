module.exports = {
  siteMetadata: {
    title: `Sunday Concert`,
    name: `urtheone`,
    siteUrl: `https://github.com/urtheone`,
    description: `Welcome to My personal blog！`,
    hero: {
      heading: `登高壯觀天地間，大江茫茫去不還`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/urtheone`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/narative.co`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/narative/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sunday Concert`,
        short_name: `Sunday`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/mylogo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
