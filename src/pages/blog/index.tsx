import React from 'react';
import { graphql, HeadFC, PageProps } from "gatsby";

import BlogMDX from '@/models/blog_mdx';
import BlogLayout from "@/components/blog/layout";
import BlogPostEntry from '@/components/blog/entry';

const BlogPage: React.FC<PageProps<Queries.AllBlogsQuery>> = ({ data }) => {
    const blogs = data.allMdx.nodes as BlogMDX[];

    return (
        <BlogLayout>
          <section className='bg-nord-1 text-white'>
              <div className='container mx-auto px-4 py-20'>
                  <h2 className='text-5xl'>Latest</h2>
                  <div className='grid lg:grid-cols-2 gap-x-8'>
                    {blogs.slice(0, 4).map((b,i) => (
                      <BlogPostEntry 
                        key={b.id}
                        forceDark
                        growFeaturedTitle
                        featured={i === 0}
                        blog={b}
                      />
                    ))}
                  </div>
              </div>
          </section>
          <section className='container mx-auto px-4 py-14'>
          <p className='text-3xl pb-6 border-b border-neutral-500'>View More Articles Below</p>
            {blogs.slice(4).map((b) => (
              <BlogPostEntry key={b.id} blog={b} />
            ))}
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
