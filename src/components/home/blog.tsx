import React from "react"
import BlogItem from "./blog_item"
import { graphql, Link, useStaticQuery } from "gatsby"
import BlogMDX from "../../models/blog_mdx";

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
              subtitle
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
        <section id="blog" className="py-16 px-3 md:px-24  min-h-[90vh]">
            <div className="container max-w-[80em] mx-auto">

                <div className="text-center pb-12">
                    <h2 className="text-6xl pb-4 font-light">Blog</h2>
                    <p className="text-center text-xl">
                        Recently, I've started homelabbing to improve my DevOps and infrastructure skillset.
                        Going forward, I am to write about what I've learnt for future reference and hopefully to help others as well.
                        View my latest posts below, or go to
                    </p>
                    <Link to="/blog" className="text-xl pt-8">
                        https://zakdowsett.co.uk/blog
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {posts.map((item: BlogMDX) => (
                        <BlogItem 
                          key={item.id}
                          title={item.frontmatter.title}
                          excerpt={item.frontmatter.subtitle}
                          image={item.frontmatter.hero_img}
                          imageAlt={item.frontmatter.hero_attr}
                          link={item.fields.slug}
                          date={item.frontmatter.date}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}   

export default Blog;