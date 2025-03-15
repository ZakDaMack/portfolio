import React from 'react';
import { graphql, HeadFC, PageProps } from "gatsby";

import BlogMDX from '@/models/blog_mdx';
import BlogLayout from "@/components/blog/layout";
import BlogPostEntry from '@/components/blog/entry';

const BlogPage: React.FC<PageProps<Queries.AllBlogsQuery>> = ({ data }) => {
    const blogs = data.allMdx.nodes;

    return (
        <BlogLayout>
          <section className='bg-nord-1 text-white'>
              <div className='container mx-auto px-4 py-20'>
                  <h2 className='text-5xl'>Featured</h2>
                  <div className='grid lg:grid-cols-2 gap-x-8'>
                    {blogs.map((b,i) => (
                      <BlogPostEntry 
                        featured={i === 0}
                        blog={b as BlogMDX}
                      />
                    ))}
                  </div>
              </div>
          </section>
          <section className='container mx-auto px-4 py-14'>
            <p className='text-3xl text-center'>More coming soon!</p>
          </section>
        </BlogLayout>
    );
}

export default BlogPage;

export const Head: HeadFC = () => <title>Blog | Zak Dowsett</title>

export const query = graphql`
query AllBlogs {
    allMdx(
        filter: { fields: { collection: { eq: "blog"}}, frontmatter: { published: { eq: true }}},
        sort: { frontmatter: { date: DESC }}, 
    ) {
        nodes {
            frontmatter {
              title
              subtitle
              tags
              date(formatString: "DD MMMM, YYYY")
              hero_attr
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
            excerpt
        }
    }
}
`;
