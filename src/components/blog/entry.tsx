import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
 
import { Link } from 'gatsby';
import { cn } from '@/lib/utils';
import BlogMDX from "@/models/blog_mdx";

const BlogPostEntry: React.FC<{
    blog: BlogMDX, 
    featured?: boolean,
    forceDark?: boolean,
    growFeaturedTitle?: boolean,
}> = ({ 
    blog, 
    featured = false, 
    forceDark = false,
    growFeaturedTitle = false,
}) => {
    const heroImg = getImage(blog.frontmatter.hero_img)
    return (
        <Link className={cn(
            'group border-b-2 border-neutral-500 last:border-b-0', 
            { 
                'lg:border-b-0 md:row-span-3' : featured,
                'dark': forceDark,
            },
        )} to={blog.fields.slug}>
            <div className={cn(
                'flex flex-col md:flex-row gap-x-5 gap-y-2 py-8',
                featured ? 'md:flex-col lg:border-b-0' : undefined
            )}>
                <div className={cn(
                    'rounded-lg overflow-hidden w-full h-[300px] md:h-[200px] md:w-[200px] min-w-[200px]',
                    featured ? 'md:w-full md:h-[300px]' : undefined
                )}>
                    <GatsbyImage
                        image={heroImg!}
                        objectFit='cover'
                        alt={blog.frontmatter.hero_attr}
                        className='h-full w-full transition-all duration-350 group-hover:!scale-[1.02]'
                    />
                </div>
                <div className='space-y-2 text-foreground'>
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
                        'text-2xl font-bold group-hover:text-nord-8 group-hover:underline',
                        featured && growFeaturedTitle ? 'md:text-6xl' : undefined 
                    )}>
                        {blog.frontmatter.title}
                    </h3>
                    <p className='text-neutral-400'>{blog.frontmatter.subtitle}</p>
                    <p className='font-mono text-neutral-400'>{blog.frontmatter.date}</p>
                </div>
            </div>
        </Link>
    );
}

export default BlogPostEntry;