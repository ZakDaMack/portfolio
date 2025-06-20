import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import BlogMDX from "../../models/blog_mdx";
import BlogPostEntry from "../blog/entry";

const Blog: React.FC = () => {
    const data = useStaticQuery(graphql`
      query {
        allMdx(
          filter: { fields: { collection: { eq: "blog"}}, frontmatter: { published: { eq: true }}},
          sort: { frontmatter: { date: DESC }},
          limit: 3
        ) {
          nodes {
            frontmatter {
              title
              tags
              subtitle
              tags
              hero_attr
              date(formatString: "DD MMM, YYYY")
              hero_img {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            fields {
              slug
            }
            id
          }
        }
      }
      `);

    const posts = data.allMdx.nodes;
    return (
        <section id="blog" className="py-16 px-4 md:px-24 min-h-[90vh]">
            <div className="container max-w-[80em] mx-auto">

                <div className="pb-12">
                    <h2 className="text-5xl font-light">Blog</h2>
                    <p className='mt-1 mb-4 text-xl text-nord-3 dark:text-nord-4'>View my latest posts below</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {posts.map((item: BlogMDX) => (
                        <BlogPostEntry 
                          key={item.id}
                          blog={item}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}   

export default Blog;