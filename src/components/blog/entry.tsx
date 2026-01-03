import React from 'react'
 
import Blog from '@/interfaces/blog';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

const BlogPostEntry: React.FC<{
    blog: Blog
}> = ({ blog }) => {
    return (
        <motion.article 
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className='space-y-2'
        >
            <Link href={blog.id}>
                <div className='relative aspect-video rounded-2xl overflow-hidden group'>
                    <Image
                        src={blog.hero_img}
                        width={600} height={400}
                        className='w-full h-full group-hover:scale-105 transition-transform duration-700 object-cover'
                        alt={blog.hero_attr}
                    />
                    <div className='absolute bottom-6 left-4'>
                        {blog.tags.map((tag) => (
                            <span 
                                key={tag} 
                                className='rounded-3xl p-2 text-sm bg-black/10 text-nord-4 border border-nord-0 backdrop-blur-sm'
                            >{tag}</span>
                        ))}
                    </div>
                </div>
                
                <div className='mt-2 text-foreground'>
                    <p className='text-neutral-400 pb-3 text-sm'>{blog.formatted_date}</p>
                    <h3 className='text-2xl font-bold pb-1 group-hover:text-nord-11'>{blog.title}</h3>
                    <p className='text-neutral-400'>{blog.subtitle}</p>
                </div>
            </Link>
        </motion.article>
    );
}

export default BlogPostEntry;