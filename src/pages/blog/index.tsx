import { FC, useMemo, useState } from 'react';

import Blog from '@/interfaces/blog';
import { GetStaticProps } from 'next';

import { getAllBlogs, getTags } from '@/lib/blogs';

import Head from 'next/head';
import RootLayout from '@/components/layout';
import BlogPostEntry from '@/components/blog/entry';
import FeaturedCarousel from '@/components/blog/featured_carousel';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from '@/components/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface BlogProps {
  blogs: Blog[];
  tags: string[];
}

const Home: FC<BlogProps> = ({ blogs, tags }) => {
    const [filter, setFilter] = useState('All');
    const filteredBlogs = useMemo(() => {
      if (filter === 'All') return blogs;
      return blogs.filter((b) => b.tags.includes(filter))
    }, [blogs, filter])

    return (
        <RootLayout>
          <Head>
              <title>Blog | Zak Dowsett</title>
          </Head>

          {/* Intro */}
          <section id='intro' className='pt-20 pb-16 text-center container max-w-[45em] mx-auto space-y-4 px-4'>
            <p className="text-nord-10">Writing</p>
            <h1 className="text-6xl font-bold">Notes from the homelab.</h1>
            <h2 className="text-nord-3 text-xl">Network security, infrastructure and the occasional £40 gadget. Written so future me can follow along.</h2>
          </section>

          {/* Blog posts */}
          <section className='px-4 pt-6 pb-28 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {blogs.map((blog, i) => (
              <div key={blog.id} className={cn(
                'rounded-4xl bg-nord-5 group grid overflow-hidden',
                i === 0 ? 'sm:col-span-3 sm:grid-cols-2' : undefined
              )}>
                <div className='overflow-hidden'>
                  <Image
                    src={blog.hero_img}
                    width={600} height={400}
                    className='w-full h-full group-hover:scale-105 transition-transform duration-700 object-cover'
                    alt={blog.hero_attr}
                  />
                </div>
                <div className='p-12 space-y-4'>
                  <div className='uppercase text-nord-3'>{i == 0 && <>Latest</>} {blog.tags[0]} {blog.formatted_date}</div>
                  <h2 className='font-bold text-4xl'>{blog.title}</h2>
                  <p className='text-nord-3'>{blog.subtitle}</p>
                  <Link href={blog.id}>Read the post</Link>
                </div>
              </div>
            ))}
          </section>
        </RootLayout>
    );
}

const getStaticProps: GetStaticProps<BlogProps> = async () => {
  // Get external data from the file system
  const data = await getAllBlogs();
  data.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { 
      blogs: data.map(b => ({
        ...b,
        id: `/blog/${b.id}`
      })),
      tags: ['All', ...await getTags()]
    },
  };
};

export default Home;
export { getStaticProps };