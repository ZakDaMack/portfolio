import { FC } from "react";

import { cn } from "@/lib/utils";
import Blog from "@/interfaces/blog";

import Head from "next/head";
import Image from "next/image";
import RootLayout from "@/components/layout";
import { NumberTicker } from "@/components/ui/number-ticker";

const statCols = [
  'lg:grid-cols-1',
  'lg:grid-cols-2',
  'lg:grid-cols-3',
  'lg:grid-cols-4',
];

const CaseStudyPost: FC<{ data: Blog }> = ({ data }) => {
  const caseStudy = data.case_study!;

  return (
    <RootLayout>
      <Head>
        <title>Zak Dowsett | {caseStudy.company}</title>
      </Head>

      {/* Intro */}
      <section id='intro' className='pt-20 pb-16 text-center container max-w-[45em] mx-auto space-y-4 px-4'>
        <p className="text-nord-10">Case study &#x2022; {caseStudy.company}</p>
        <h1 className="text-6xl font-bold">{data.title}</h1>
        <h2 className="text-nord-3 text-xl">{caseStudy.role} &#x2022; {data.subtitle}</h2>
        <Image
          src={data.hero_img}
          alt={data.hero_attr}
          height={1080}
          width={1920}
          className='rounded-4xl'
        />
      </section>

      {/* Stats */}
      <section id='stats' className='bg-nord-5 p-16 w-full'>
        <div className={cn(
          'container mx-auto grid grid-cols-1 gap-x-8 gap-y-16',
          statCols[caseStudy.stats.length - 1]
        )}>
          {caseStudy.stats.map(e => (
            <div key={e.subtext} className="text-center text-nord-10">
              <p className='text-4xl md:text-6xl mb-4'>
                <span>{e.prefix}</span>
                {!!e.value && <NumberTicker value={e.value} className="text-nord-10!" />}
                <span>{e.suffix}</span>
              </p>
              <p className="text-sm md:text-base">{e.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Article */}
      <section id='article' className="container mx-auto my-24 max-w-[40em] space-y-16 px-4 [&_h3]:pb-4">
        <div>
          <h3 className="font-bold text-3xl">The problem</h3>
          <p>{caseStudy.problem}</p>
        </div>
        <div>
          <h3 className="font-bold text-3xl">Decisions that mattered</h3>
          <div className="space-y-4">
            {caseStudy.decisions.map(d => (
              <div key={d.title} className="bg-nord-5 rounded-2xl py-6 px-8">
                <h4 className="font-bold text-2xl pb-2">{d.title}</h4>
                <p>{d.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-3xl">The outcome</h3>
          <p>{caseStudy.outcome}</p>
        </div>
      </section>

    </RootLayout>
  );
}

export default CaseStudyPost;
