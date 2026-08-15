import { FC } from "react"

import { cn } from "@/lib/utils"

import Link from "../link";
import Image from "next/image";

const WorkGrid: FC = () => {
  return (
    <section id="workgrid" className={cn(
        "py-16 px-4 min-h-[90vh] relative"
    )}>      
        <div className="container mx-auto space-y-8">

            {/* Featured case study */}
            <div className={cn(
                "group relative grid md:grid-cols-2 gap-8 bg-card rounded-4xl p-16",
                "gap-x-16"
            )}>
                <div className='space-y-4 text-nord-3 max-w-lg'>
                    <h3 className='uppercase text-sm'>1FIT &#x2022; Senior Software Engineer</h3>
                    <h2 className="text-nord-0 font-bold text-4xl">Training software for 100k+ daily users.</h2>
                    <p className='text-lg'>
                        Millions of rows of progress data a day. CI/CD and containerization cut deployment time by 80%.
                    </p>
                    <Link href="/blog/1fit" className="after:absolute after:inset-0 after:content-['']">Read the case study</Link>
                </div>
                <div className='rounded-3xl overflow-hidden'>
                    <Image
                        src='/1fit_casestudy.jpg'
                        alt='1FIT case study image'
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
                <div className='group relative bg-card rounded-4xl p-16 space-y-4 text-nord-3'>
                    <h3 className='uppercase text-sm'>FuelFinder &#x2022; Solo Project</h3>
                    <h2 className="text-nord-0 font-bold text-4xl">Fuel prices, found and visualised.</h2>
                    <p className='text-lg'>
                        Real-time fuel price tracking across multiple locations. Built and run end to end by me.
                    </p>
                    <Link href="/blog/fuelfinder" className="after:absolute after:inset-0 after:content-['']">Read the case study</Link>
                    <div className='rounded-3xl overflow-hidden mt-8'>
                        <Image
                            src='/fuelfinder_casestudy.jpg'
                            alt='FuelFinder case study image'
                            className='w-full h-auto transition-transform duration-500 group-hover:scale-105'
                            objectFit='cover'
                            objectPosition='right'
                            width={800}
                            height={600}
                        />
                    </div>
                </div>

                <div className='relative bg-nord-1 text-slate-400 rounded-4xl p-16 space-y-4'>
                    <h3 className='uppercase text-sm'>Earlier</h3>
                    <h2 className='text-nord-6 font-bold text-4xl text-'>Transalis <span className='text-3xl'>&#x2022;</span> Bluesquare <span className='text-3xl'>&#x2022;</span> Pear Technology</h2>
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