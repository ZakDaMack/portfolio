import { FC } from 'react';

import Blog from '@/interfaces/blog';
import { GetStaticProps } from 'next';

import { cn } from '@/lib/utils';
import { getBlogData, getMarkdownData, getPaths } from '@/lib/blogs';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import RootLayout from '@/components/layout';

interface _BlogPostPageProps {
  data: Blog;
  body: string;
}

const BlogPostPage: FC<_BlogPostPageProps> = ({ data, body }) => {
    return (
        <RootLayout>
          <Head>
              <title>{data.title} | Zak Dowsett</title>
          </Head>
            <article>
                <motion.section 
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className='mx-auto pt-4 px-4 max-w-7xl'
                >
                    <div className='rounded-3xl overflow-hidden relative'>
                        <Image
                            src={data.hero_img}
                            width={1200} height={600}
                            className='w-full aspect-video object-cover'
                            alt={data.hero_attr}
                        />
                        <div className='absolute top-0 bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent hidden md:flex flex-col justify-end p-6'>
                  
                        {/* tags */}
                        <div>
                            {data.tags.map((tag) => (
                                <Link 
                                    key={tag}
                                    className='rounded-3xl p-3 bg-black/10 text-nord-4 border border-nord-0 backdrop-blur-sm'
                                    // href={`/tags/${tag.toLowerCase()}`}
                                    href='#'
                                >{tag}</Link>
                            ))}
                        </div>

                        {/* article info */}
                        <div className='md:flex justify-between items-end my-8'>
                            <div className='space-y-3 max-w-4xl'>
                                <h1 className='text-3xl md:text-5xl text-nord-6 font-bold'>{data.title}</h1>
                                <p className='text-lg text-neutral-400'>{data.subtitle}</p>
                            </div>
                            <div>
                                <p className='text-nord-6'>{data.formatted_date}</p>
                            </div>
                        </div>
                  
                </div>
              </div>
              <p className='text-sm pl-4'>{data.hero_attr}</p>
            </motion.section>

            <motion.section 
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}} 
              transition={{delay: 0.2}}
              id='article__content' 
              className='text-justify space-y-6 px-4 md:px-8 pt-6 pb-20 md:py-28 max-w-3xl mx-auto'
            >

                {/* article info - mobile */}
                <div className='block md:hidden mb-8 text-left'>
                    <div className='space-y-3'>
                        <h1 className='text-2xl font-bold'>{data.title}</h1>
                        <p className='text-lg text-neutral-400'>{data.subtitle}</p>
                    </div>
                    <p>{data.date}</p>
                    <div className='border mt-6' />
                </div>

                <div className={cn(
                    "text-justify space-y-6",
                    "[&_pre]:bg-nord-5 [&_pre]:p-3 [&_pre]:text-sm [&_pre]:rounded [&_pre]:overflow-x-auto",
                    "[&_em]:italic",
                    "[&_h1]:text-3xl [&_h1]:font-bold",
                    "[&_h2]:text-2xl",
                    "[&_h3]:text-xl",
                    "[&_strong]:font-bold",
                    "[&_img]:rounded-2xl [&_img]:mx-auto",
                    "[&_img+em]:text-sm [&_img+em]:text-center! [&_img+em]:block [&_img+em]:text-neutral-500",
                    "[&_span+em]:block [&_span+em]:italic [&_span+em]:text-sm [&_span+em]:text-center [&_span+em]:text-nord-3",
                    "dark:[&_pre]:bg-nord-4 dark:[&_pre]:text-nord-1",
                    "dark:[&_span+em]:text-nord-4"
                )} dangerouslySetInnerHTML={{__html: body}}></div>
            </motion.section>
          </article>
      </RootLayout>
    );
}

const getStaticProps: GetStaticProps<_BlogPostPageProps> = async ({ params }) => {
    const slug = params?.slug as string;
    const data = await getBlogData(slug);
    const body = await getMarkdownData(slug);

    return {
        props: {
            data,
            body
        }
    };
};

const getStaticPaths = async () => {
    const items = getPaths();
    const paths = items.map((item) => ({
        params: { slug: item },
    }));

    return {
        paths,
        fallback: false,
    };
};

export default BlogPostPage;
export { getStaticProps, getStaticPaths };