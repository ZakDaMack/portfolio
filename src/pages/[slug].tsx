import { FC } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import { getEntryData, getMarkdownData, getPaths } from "@/lib/portfolio";

import { GetStaticProps } from "next";
import Portfolio from "@/interfaces/portfolio";

import Head from "next/head";
import Image from "next/image";
import { motion } from 'motion/react';
import RootLayout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"; 

interface _PageProps {
  data: Portfolio;
  content: string;
}

const PortfolioPage: FC<_PageProps> = ({ data, content }) => {
  const router = useRouter();
    const handleBack = () => router.back();

    return (
      <RootLayout>
          <Head>
            <title>{data.name} | Zak Dowsett</title>
          </Head>

          <article className='relative grid md:grid-cols-2 gap-8 p-4 pt-24'>
            <div className='hidden md:block col-span-2'>
              <Button onClick={handleBack} className='rounded-2xl mt-4 cursor-pointer'>
                <FontAwesomeIcon className='pr-2' icon={faArrowLeft} />
                Go back
              </Button>
            </div>
            <section>
              <Image
                src={data.backdrop}
                width={600} height={800}
                className={cn(
                  'absolute md:relative top-0 left-0 w-full aspect-square md:aspect-video md:rounded-3xl object-fit',
                  '[mask:linear-gradient(to_bottom,white,transparent)] md:[mask:none]'
                )}
                alt={`${data.name} backdrop`}
              />
            </section>
            <motion.section initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} className='mt-60 md:mt-0 mb-16 z-10'>
              <Image
                src={data.logo}
                width={300} height={300}
                className='h-28 mb-8 object-left object-contain'
                alt={`${data.name} logo`}
              />
              <h1 className='text-5xl'>{data.name}</h1>
              <p className='text-2xl text-neutral-500'>{data.summary}</p>
              <ul className='mt-6 text-sm flex flex-wrap gap-2'>
                {data.skills.map(s => (
                  <li key={s} className='rounded-3xl py-2 px-3 bg-white/10 dark:bg-black/10 border backdrop-blur-sm'>{s}</li>
                ))}
              </ul>
              <div className='my-8 space-y-4' dangerouslySetInnerHTML={{__html: content}}>
              </div>
              <a href={data.link} target='_blank' className='text-foreground relative'>
                <InteractiveHoverButton>Visit site</InteractiveHoverButton>
              </a>
            </motion.section>
          </article>
      </RootLayout>
    );
}

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

const getStaticProps: GetStaticProps<_PageProps> = async ({ params }) => {
  // Get external data from the file system
  const data = await getEntryData(params!.slug as string);
  const contentHtml = await getMarkdownData(params!.slug as string);
  return {
    props: { 
      data: data,
      content: contentHtml
    },
  };
};

export default PortfolioPage;
export { getStaticProps, getStaticPaths };