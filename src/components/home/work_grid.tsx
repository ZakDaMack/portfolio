import { FC } from "react"

import { cn } from "@/lib/utils"

import Blog from "@/interfaces/blog";

import Link from "../link";
import Image from "next/image";

const WorkGrid: FC<{
    caseStudies: Blog[]
}> = ({
    caseStudies
}) => {
    const [featured, other] = caseStudies
    
  return (
    <section id="workgrid" className={cn(
        "py-16 px-4 min-h-[90vh] relative"
    )}>      
        <div className="container mx-auto space-y-8">

            {/* Featured case study */}
            <div className={cn(
                "group relative grid md:grid-cols-2 gap-8 bg-card rounded-4xl p-8 md:p-16",
                "gap-x-16"
            )}>
                <div className='space-y-4 text-nord-3 dark:text-nord-4 max-w-lg'>
                    <h3 className='uppercase text-sm'>{featured.case_study?.company} &#x2022; {featured.case_study?.role}</h3>
                    <h2 className="text-nord-0 dark:text-nord-6 font-bold text-4xl">{featured.title}</h2>
                    <p className='text-lg'>{featured.subtitle}</p>
                    <Link href={featured.id} className="after:absolute after:inset-0 after:content-['']">Read the case study</Link>
                </div>
                <div className='rounded-3xl overflow-hidden'>
                    <Image
                        src={featured.hero_img}
                        alt={featured.hero_attr}
                        className='w-full h-auto transition-transform duration-500 group-hover:scale-105'
                        objectFit='cover'
                        objectPosition='right'
                        width={800}
                        height={600}
                    />
                </div>
            </div>

            {/* Other cards */}
            <div className={cn(
                "grid md:grid-cols-2 gap-8"
            )}>
                <div className='group relative bg-card rounded-4xl p-8 md:p-16 space-y-4 text-nord-3 dark:text-nord-4 '>
                    <h3 className='uppercase text-sm'>{other.case_study?.company} &#x2022; {other.case_study?.role}</h3>
                    <h2 className="text-nord-0 dark:text-nord-6 font-bold text-4xl">{other.title}</h2>
                    <p className='text-lg'>{other.subtitle}</p>
                    <Link href={other.id} className="after:absolute after:inset-0 after:content-['']">Read the case study</Link>
                    <div className='rounded-3xl overflow-hidden mt-8'>
                        <Image
                            src={other.hero_img}
                            alt={other.hero_attr}
                            className='w-full h-auto transition-transform duration-500 group-hover:scale-105'
                            objectFit='cover'
                            objectPosition='right'
                            width={800}
                            height={600}
                        />
                    </div>
                </div>

                <div className='relative bg-nord-1 text-slate-400 rounded-4xl p-8 md:p-16 space-y-4'>
                    <h3 className='uppercase text-sm'>Earlier</h3>
                    <h2 className='text-nord-6 font-bold text-4xl'>Transalis <span className='text-3xl'>&#x2022;</span> Bluesquare <span className='text-3xl'>&#x2022;</span> Pear Technology</h2>
                    <p className=''>
                        I&apos;ve worked on a variety of projects, from small startups to large enterprises. Here are some of my other work.
                    </p>
                    <Link href="/blog" className="after:absolute after:inset-0 after:content-['']">Read more case studies</Link>
                </div>
            </div>

        </div>
    </section>
  );
}

export default WorkGrid;