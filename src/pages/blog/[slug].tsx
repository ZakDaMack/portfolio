import { FC } from 'react';

import Blog from '@/interfaces/blog';
import { GetStaticProps } from 'next';

import { cn } from '@/lib/utils';
import { getBlogData, getMarkdownData, getPaths } from '@/lib/blogs';

import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'motion/react';
import RootLayout from '@/components/layout';
import Link from '@/components/link';

interface _BlogPostPageProps {
  data: Blog;
  body: string;
}

const BlogPostPage: FC<_BlogPostPageProps> = ({ data, body }) => {
    const words = body.split(' ')
    const mins = Math.ceil(words.length / 200) // words / words per min avg

    return (
        <RootLayout>
          <Head>
              <title>{data.title} | Zak Dowsett</title>
          </Head>

          {/* Intro */}
          <section id='intro' className='pt-20 pb-16 text-center container max-w-[45em] mx-auto space-y-4 px-4'>
            <p className="text-nord-10">
                <span>{data.tags[0]}</span>
                <span className='text-sm px-1'>&#x2022;</span>
                <span>{data.formatted_date}</span>
                <span className='text-sm px-1'>&#x2022;</span>
                <span>{mins} min read</span>
            </p>
            <h1 className="text-3xl md:text-6xl font-bold">{data.title}</h1>
            <h2 className="text-nord-3 text-lg md:text-xl">{data.subtitle}</h2>
          </section>

          {/* Image */}
            <motion.section 
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                className='mx-auto px-4 max-w-5xl'
            >
                <div className='rounded-3xl overflow-hidden'>
                    <Image
                        src={data.hero_img}
                        width={1200} height={600}
                        className='w-full aspect-video object-cover'
                        alt={data.hero_attr}
                    />
            </div>
            <p className='text-sm pl-4'>{data.hero_attr}</p>
        </motion.section>

        {/* Main body */}
            <motion.section 
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}} 
                transition={{delay: 0.2}}
                id='article__content' 
                className='text-justify space-y-6 px-4 pt-12 md:px-8 max-w-3xl mx-auto'
            >
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

            {/* Author */}
            <section className='max-w-2xl mx-auto bg-nord-5 rounded-4xl py-4 px-3 flex gap-3 my-6'>
                <Image 
                    src='/zakdowsett.png'
                    alt='Zak Dowsett'
                    width={80}
                    height={80}
                    className='rounded-full'
                />
                <div>
                    <p>Zak Dowsett</p>
                    <p>Senior Software Engineer. Writes about my homelabbing and security projects.</p>
                </div>
                <Link href='/'>About</Link>
            </section>

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