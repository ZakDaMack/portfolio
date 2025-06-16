import React from 'react'
import BlogMDX from "@/models/blog_mdx";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
 
import { Link } from 'gatsby';
import { motion } from 'motion/react';

const BlogPostEntry: React.FC<{blog: BlogMDX}> = ({ blog }) => {
    const heroImg = getImage(blog.frontmatter.hero_img)
    return (
        <motion.article 
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className='space-y-2'
        >
            <Link to={blog.fields.slug}>
                <div className='relative aspect-video rounded-2xl overflow-hidden group'>
                    <GatsbyImage
                        image={heroImg!}
                        objectFit='cover'
                        className='w-full h-full group-hover:scale-105 transition-transform duration-700'
                        alt={blog.frontmatter.hero_attr}
                    />
                    <div className='absolute bottom-6 left-4'>
                        {blog.frontmatter.tags.map((tag, i) => (
                            <span 
                                key={tag} 
                                className='rounded-3xl p-2 text-sm bg-black/10 text-nord-4 border border-nord-0 backdrop-blur-sm'
                            >{tag}</span>
                        ))}
                    </div>
                </div>
                
                <div className='mt-2 text-foreground'>
                    <p className='text-neutral-400 pb-3 text-sm'>{blog.frontmatter.date}</p>
                    <h3 className='text-2xl font-bold pb-1'>{blog.frontmatter.title}</h3>
                    <p className='text-neutral-400'>{blog.frontmatter.subtitle}</p>
                </div>
            </Link>
        </motion.article>
    );
}

export default BlogPostEntry;