import * as path from 'path'
import { createFilePath } from 'gatsby-source-filesystem'
import { CreateNodeArgs, CreatePagesArgs, CreateWebpackConfigArgs } from 'gatsby';

export const onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/hooks": path.resolve(__dirname, "src/hooks"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
      },
    },
  })
}

export const onCreateNode = ({ node, actions, getNode }: CreateNodeArgs) => {
    const { createNodeField } = actions
    if (node.internal.type === `Mdx`) {
      // creates the resource type for easier filtering
      const collection = getNode(node.parent!)!.sourceInstanceName;
      createNodeField({
        node,
        name: `collection`,
        value: collection
      });

      if (collection == 'blog') {
        const slug = createFilePath({ node, getNode })
        createNodeField({
          node,
          name: `slug`,
          value: `/blog${slug}`,
        })
      }
    }
};

export const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions

  // get only blog posts that are published
  const allMdx = await graphql(`
    query BlogPages {
      allPosts: allMdx(
        filter: { fields: { collection: { eq: "blog"}}, frontmatter: { published: { eq: true }}},
        sort: { frontmatter: {date: DESC}}
        limit: 1000
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
          internal {
            contentFilePath
          }
        }
      }

      tagsGroup: allMdx(
        filter: { fields :{collection: {eq:"blog"}}}
        limit: 2000
      ) {
        group(
          field: {frontmatter: {tags:SELECT}}
        ) {
          fieldValue
        }
      }
    }
  `)
  if (allMdx.errors) {
    throw allMdx.errors
  }

  const posts = (allMdx.data as Queries.BlogPagesQuery).allPosts.nodes

  const template = path.resolve(`./src/templates/blog.jsx`);
  posts.forEach((post) => {
    createPage({
      path: post.fields!.slug!,
      component: `${template}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        slug: post.fields!.slug,
      },
    })
  })
}