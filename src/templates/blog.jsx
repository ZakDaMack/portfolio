import React from 'react';
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { MDXProvider } from '@mdx-js/react';
import BlogLayout from "@/components/blog/layout";

import './blog.css'

const BlogPostPage = ({ data, children }) => {
    const blog = data.mdx;
    const heroImg = getImage(blog.frontmatter.hero_img)

    return (
      <BlogLayout>
          <article>
            <section className='relative bg-slate-800 text-white pt-20'>
              <div className='max-w-screen-md mx-auto px-8 space-y-4'>
                <p>
                  {blog?.frontmatter?.tags?.map((tag) => (
                    <Link 
                      className='bg-gradient-to-r from-fuchsia-200 to-yellow-300 text-transparent bg-clip-text'
                      to={`/tags/${tag.toLowerCase()}`}
                    >
                      {tag}
                    </Link>
                  ))}
                </p>
                <h1 className='text-3xl md:text-5xl max-w-4xl font-bold'>{blog?.frontmatter?.title}</h1>
                <p className='text-lg text-neutral-400 pb-6'>{blog?.frontmatter?.subtitle}</p>
                <GatsbyImage
                  image={heroImg}
                  objectFit='cover'
                  className='rounded-xl w-full z-[5] shadow-lg'
                  alt={blog?.frontmatter?.hero_attr}
                />
              </div>
              <div className='absolute bottom-0 bg-white w-full h-20' />
            </section>
            <section className='max-w-screen-md mx-auto px-8 pb-2 pt-1 space-y-2'>
              <p className='text-sm'>{blog?.frontmatter?.hero_attr}</p>
              <p>{blog?.frontmatter?.date}</p>
              <div className='border-b-2 pt-4 border-slate-800' />
            </section>
            <section 
              id='article__content' 
              className='text-justify space-y-4 px-8 pt-4 pb-20 max-w-screen-md mx-auto'
            >
              <MDXProvider>
                {children}
              </MDXProvider>
            </section>
          </article>
      </BlogLayout>
    );
}

export default BlogPostPage;

export const Head = ({data}) => <title>{data.mdx?.frontmatter?.title} | Zak Dowsett</title>

export const query = graphql`
  query GetBlog($slug: String!) {
    mdx(fields: {slug: { eq: $slug }}) {
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
    }
  }
`;
