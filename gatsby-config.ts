import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://zakdowsett.co.uk`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss", 
    "gatsby-plugin-image", 
    "gatsby-plugin-typescript", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-mdx', 
      options: {
        "gatsbyRemarkPlugins": [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      }
    }, 
    
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/z.png"
      }
    }, 
    {
      __key: "images",
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      }
    }, 
    {
      __key: "pages",
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      }
    }, 
    {
      __key: "portfolio",
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "portfolio",
        "path": "./portfolio/"
      }
    },
    {
      __key: "blog",
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": "./blog/"
      }
    }
  ]
};

export default config;
