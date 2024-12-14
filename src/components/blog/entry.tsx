import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
 
import { Link } from 'gatsby';
import { cn } from '@/lib/utils';
import BlogMDX from "@/models/blog_mdx";

const BlogPostEntry: React.FC<{blog: BlogMDX, featured?: boolean}> = ({ blog, featured = false }) => {
    const heroImg = getImage(blog.frontmatter.hero_img)
    return (
        <Link className={cn(
            'border-b-2 border-neutral-700 last:border-b-0', 
            featured ? 'lg:border-b-0 md:row-span-3' : undefined
        )} to={blog.fields.slug}>
            <div className={cn(
                'flex flex-col md:flex-row gap-x-5 gap-y-2 py-8',
                featured ? 'md:flex-col lg:border-b-0' : undefined
            )}>
                <GatsbyImage
                    image={heroImg!}
                    objectFit='cover'
                    alt={blog.frontmatter.hero_attr}
                    className={cn(
                        'rounded-lg w-full h-[300px] md:h-[200px] md:w-[200px] min-w-[200px]',
                        featured ? 'md:w-full md:h-[300px]' : undefined
                    )}
                />
                <div className='space-y-2 text-white'>
                    <p>
                        {blog.frontmatter.tags.map((tag, i) => (
                            <>
                                <span 
                                    key={tag} 
                                    className='bg-gradient-to-r from-fuchsia-200 to-yellow-300 text-transparent bg-clip-text'
                                >
                                    {tag}
                                </span>
                                {i !== blog.frontmatter.tags.length - 1 && (
                                    <span className='mx-2' key={`${tag}-divider`}>|</span>
                                )}
                            </>
                        ))}
                    </p>
                    <h3 className={cn(
                        'text-2xl font-bold',
                        featured ? 'md:text-4xl' : undefined 
                    )}>
                        {blog.frontmatter.title}
                    </h3>
                    <p className='text-neutral-400'>{blog.frontmatter.subtitle}</p>
                    <p className='text-neutral-400'>{blog.frontmatter.date}</p>
                </div>
            </div>
        </Link>
    );
}

export default BlogPostEntry;