import React from 'react';
import { motion } from 'motion/react';
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { MDXProvider } from '@mdx-js/react';
import Header from "@/components/header";
import Footer from "@/components/footer";

import './blog.css'

const BlogPostPage = ({ data, children }) => {
    const blog = data.mdx;
    const heroImg = getImage(blog.frontmatter.hero_img)

    return (
      <>
        <Header className="max-w-screen-xl left-1/2 -translate-x-1/2" blurHeight={100} />
        <main className='w-screen min-h-screen'>
          <article>
            <motion.section 
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              className='mx-auto pt-3 px-4 max-w-screen-xl'
            >
              <div className='rounded-3xl overflow-hidden relative'>
                <GatsbyImage
                  image={heroImg}
                  objectFit='cover'
                  className='w-full aspect-video'
                  alt={blog?.frontmatter?.hero_attr}
                />
                <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent hidden md:flex flex-col justify-end p-6  '>
                  
                  {/* tags */}
                  <div>
                    {blog?.frontmatter?.tags?.map((tag) => (
                      <Link 
                        key={tag}
                        className='rounded-3xl p-3 bg-black/10 text-nord-4 border border-nord-0 backdrop-blur-sm'
                        to={`/tags/${tag.toLowerCase()}`}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>

                  {/* article info */}
                  <div className='md:flex justify-between items-end my-8'>
                    <div className='space-y-3 max-w-4xl'>
                      <h1 className='text-3xl md:text-5xl text-nord-6 font-bold'>{blog?.frontmatter?.title}</h1>
                      <p className='text-lg text-neutral-400'>{blog?.frontmatter?.subtitle}</p>
                    </div>
                    <div>
                      <p className='text-nord-6'>{blog?.frontmatter?.date}</p>
                    </div>
                  </div>
                  
                </div>
              </div>
              <p className='text-sm pl-4'>{blog?.frontmatter?.hero_attr}</p>
            </motion.section>
            <motion.section 
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}} 
              transition={{delay: 0.2}}
              id='article__content' 
              className='text-justify space-y-6 px-4 md:px-8 pt-6 pb-16 md:py-28 max-w-screen-md mx-auto'
            >

                  {/* article info */}
                  <div className='block md:hidden mb-8 text-left'>
                    <div className='space-y-3'>
                      <h1 className='text-2xl font-bold'>{blog?.frontmatter?.title}</h1>
                      <p className='text-lg text-neutral-400'>{blog?.frontmatter?.subtitle}</p>
                    </div>
                    <p>{blog?.frontmatter?.date}</p>
                    <div className='border mt-6' />
                  </div>
              <MDXProvider>
                {children}
              </MDXProvider>
            </motion.section>
          </article>
        </main>
        <Footer />
      </>
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
