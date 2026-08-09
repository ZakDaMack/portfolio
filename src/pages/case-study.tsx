import { FC } from "react";

import { getAllBlogs } from "@/lib/blogs";
import { getAllItems } from "@/lib/portfolio";

import Blog from "@/interfaces/blog";
import { GetStaticProps } from "next";
import Portfolio from "@/interfaces/portfolio";

import Head from "next/head";
import About from "@/components/home/about";
import RootLayout from "@/components/layout";
import Splash from "@/components/home/splash";
import BlogSection from "@/components/home/blog";
import WorkGrid from "@/components/home/work_grid";
import PortfolioSection from "@/components/home/portfolio";
import StatsBanner from "@/components/home/stats_banner";
import Image from "next/image";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CaseStudy {
  title: string
  subtitle: string
  company: string
  role: string
  skills: string[]
  stats: {
    prefix?: string
    suffix: string
    value?: number
    subtext: string
  }[]
  problem: string
  decisions: {
    title: string
    description: string
  }[]
  outcome: string
}

interface _CaseStudyProps {
  caseStudy: CaseStudy;
}

const CaseStudy: FC<_CaseStudyProps> = ({ caseStudy }) => {
  return (
    <RootLayout>
      <Head>
        <title>Zak Dowsett | {caseStudy.company}</title>
      </Head>

      {/* Intro */}
      <section id='intro' className='py-24 text-center container max-w-4xl mx-auto space-y-4 px-4'>
        <p className="text-nord-10">Case study &#x2022; {caseStudy.company}</p>
        <h1 className="text-6xl font-bold">{caseStudy.title}</h1>
        <h2 className="text-nord-3">{caseStudy.role} &#x2022; {caseStudy.subtitle}</h2>
        <Image
          src='/1fit_casestudy.jpg'
          alt={caseStudy.company}
          height={1080}
          width={1920}
          className='rounded-4xl'
        />
      </section>

      {/* Stats */}
      <section id='stats' className='bg-nord-5 p-16 w-full'>
        <div className={cn(
          'container mx-auto grid grid-cols-1 gap-x-8 gap-y-16',
          `lg:grid-cols-${caseStudy.stats.length}`
        )}>
          {caseStudy.stats.map(e => (
            <div className="text-center text-nord-10">
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
              <div className="bg-nord-5 rounded-2xl py-6 px-8">
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

      {/* Next up */}
      <section className="text-center bg-nord-0 py-12 space-y-6 px-4">
        <p className="font-bold text-4xl text-nord-4">Next up: FuelFinder</p>
        <Button className="rounded-3xl text-lg bg-nord-10 p-6">Read it &gt;</Button>
      </section>
      
    </RootLayout>
  );
}

const getStaticProps: GetStaticProps<_CaseStudyProps> = async () => {
  // Get external data from the file system
  const portfolioData = await getAllItems()
  portfolioData.sort((a, b) => {
    return new Date(b.start_date).getTime() - new Date(a.start_date).getTime();
  });

  const blogData = await getAllBlogs();
  blogData.forEach(b => {
    b.id = `/blog/${b.id}`;
  });
  blogData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { 
      caseStudy: {
        title: 'Training software that keeps up with 100,000 athletes.',
        subtitle: 'Backend, infrastructure and delivery',
        company: '1FIT',
        role: 'Senior Software Engineer',
        skills: [
          'React',
          'Laravel',
          'Amazon ECS',
          'Docker',
          'Flutter'
        ],
        stats: [
          {
            value: 100,
            suffix: 'k+',
            subtext: 'users on platform'
          },
          {
            suffix: 'Millions',
            subtext: 'of rows processed daily'
          },
          {
            prefix: '-',
            value: 80,
            suffix: '%',
            subtext: 'deployment time'
          }
        ],
        problem: "Trainers build plans, clients log progress, and every rep, set and measurement lands in the database — millions of rows a day at 100k+ daily users. The release process couldn't keep pace: deploys were slow, manual, and nerve-racking enough that nobody shipped on Fridays. Or Thursdays.",
        decisions: [
          {
            title: 'Containerise everything',
            description: 'Docker plus a CI/CD pipeline owning build, test and release. Deployment time fell 80% — shipping stopped being an event.'
          },
          {
            title: 'Event-driven at the core',
            description: 'High-volume, bursty writes run through an event-driven pipeline: the write path stays fast, consumers aggregate at their own pace.'
          },
          {
            title: "Make the pipeline everyone's",
            description: 'Documented the release path and paired with the team until deploying was a non-event for everyone.'
          },
        ],
        outcome: "A platform that scales with its data and a team that ships without ceremony. The interesting part was never the tooling — it was making reliability the default."
      }
    },
  };
};

export default CaseStudy;
export { getStaticProps };