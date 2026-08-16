import { FC } from 'react';

import { GetStaticProps } from 'next';
import Entry from '@/interfaces/entry';

import { cn } from '@/lib/utils';
import { getHistory } from '@/lib/history';

import Head from 'next/head';
import Link from '@/components/link';
import RootLayout from '@/components/layout';
import { Button } from '@/components/ui/button';

interface HistoryProps {
  entries: Entry[];
}

const History: FC<HistoryProps> = ({ entries }) => {
    return (
        <RootLayout>
          <Head>
              <title>History | Zak Dowsett</title>
          </Head>

          {/* Intro */}
          <section id='intro' className='pt-20 pb-16 text-center container max-w-[45em] mx-auto space-y-4 px-4'>
            <p className="text-nord-10 dark:text-nord-8">Employment history</p>
            <h1 className="text-4xl sm:text-6xl font-bold">Seven years, four companies.</h1>
            <h2 className="text-nord-3 dark:text-nord-4 sm:text-xl">My story so far: What I built at each stop and what each one has taught me.</h2>
          </section>

          {/* Blog posts */}
          <section className='px-4 pt-6 pb-28 container mx-auto max-w-3xl'>
            {entries.map((e, i) => (
              <div key={e.id} className='relative'>
                <div className={cn(
                  'size-4 rounded-full absolute -left-2 top-4 z-10 border border-nord-9',
                  i === 0 ? 'bg-nord-9' : undefined
                )}></div>
                <div className='w-1 border-l border-nord-4 dark:border-nord-3 absolute left-0 bottom-0 top-8'></div>
                <div className='space-y-1 pl-8 pt-4 pb-1'>
                  <p className={cn(
                    'uppercase text-sm',
                    i === 0 ? 'text-nord-9' : undefined
                  )}>{e.dates}</p>
                  <h3 className='text-2xl font-bold'>{e.role} <span className='text-base pb-1'>&#x2022;</span> {e.company}</h3>
                  <p>{e.description}</p>
                  <div className='flex flex-wrap gap-3 py-4'>
                    {e.skills.map(s => (
                      <div key={s} className='bg-card px-3 py-2 rounded-3xl text-sm font-semibold'>{s}</div>
                    ))}
                  </div>
                  <Link target='_blank' href={e.link} element='a'>Visit site</Link>
                </div>
              </div>
            ))}
          </section>

          {/* cta footer */}
          <section className='bg-nord-0 text-center py-14 px-4'>
            <h2 className='text-2xl text-nord-6 font-bold pb-4'>Want the one page version?</h2>
            <Button size='lg' asChild className='bg-nord-10 rounded-3xl'>
              <Link href='zaks_cv.pdf' target='_blank'>Download the CV</Link>
            </Button>
          </section>
        </RootLayout>
    );
}

const getStaticProps: GetStaticProps<HistoryProps> = async () => {
  // Get external data from the file system
  return {
    props: { 
      entries: getHistory()
    },
  };
};

export default History;
export { getStaticProps };