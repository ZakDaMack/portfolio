import { FC, useMemo, useState } from 'react';

import Blog from '@/interfaces/blog';
import { GetStaticProps } from 'next';

import { getAllBlogs, getTags } from '@/lib/blogs';

import Head from 'next/head';
import RootLayout from '@/components/layout';
import BlogPostEntry from '@/components/blog/entry';
import FeaturedCarousel from '@/components/blog/featured_carousel';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

          <section className='hidden sm:block'>
            <FeaturedCarousel 
              blogs={blogs.slice(0, 3)}
            />
          </section>

          <section className='px-4 pt-14 pb-28'>
            <div className='block sm:hidden mt-12' />
            <h1 className='text-5xl font-light'>Blog</h1>
            <p className='mt-2 mb-6 text-xl text-nord-3 dark:text-nord-4'>Browse the latest, occasionally made blog posts down below!</p>
            <Tabs className='mb-8' value={filter} onValueChange={setFilter}>
              <TabsList className='bg-transparent h-[unset] flex p-0 gap-x-4 justify-start flex-wrap'>
                {tags.map(tag => (
                  <TabsTrigger 
                    key={tag} value={tag}
                    className='text-base rounded py-2 px-4 data-[state=active]:dark:bg-nord-1 data-[state=active]:bg-nord-4 text-foreground cursor-pointer'
                  >{tag}</TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* blog list */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
              {filteredBlogs.map((b,i) => (<BlogPostEntry key={b.id} blog={b} />))}
            </div>
          </section>
        </RootLayout>
    );
}

const getStaticProps: GetStaticProps<BlogProps> = async ({ params }) => {
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