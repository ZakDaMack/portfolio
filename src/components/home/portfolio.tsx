import { FC } from "react"

import Portfolio from "@/interfaces/portfolio";

import Link from "next/link";
import Image from "next/image";
import { ShinyButton } from "../ui/shiny-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PortfolioSection: FC<{
  data: Portfolio[]
}> = ({ data }) => {
    return (
        <section id="portfolio" className="py-16 px-4 md:px-24 min-h-[90vh] bg-nord-5 dark:bg-nord-1">
            <div className="container max-w-[80em] mx-auto">

                <div className="pb-12">
                    <h2 className="text-5xl font-light">Portfolio</h2>
                    <p className='mt-1 mb-4 text-xl text-nord-3 dark:text-nord-4'>Let&apos;s look at where I&apos;ve worked and what I&apos;ve done</p>
                </div>

                <div className='grid lg:grid-cols-2 gap-8'>
                  {data.map((p) => (
                    <div key={p.id} className='rounded-3xl border relative col-span-1 overflow-hidden h-[300px] group'>
                      <Link href={p.id}>
                        <Image 
                            className="w-full h-full object-cover brightness-75 opacity-50 transition-all group-hover:opacity-100 group-hover:scale-105"
                            height={300} width={600}
                            src={p.backdrop} 
                            alt={`${p.name} backdrop`}
                        />

                        <div className='w-1/2 p-4 flex flex-col justify-end absolute right-0 top-0 bottom-0 left-1/2 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm'>
                          <Image 
                            className="max-h-[75px] object-contain object-left" 
                            height={300} width={300}
                            src={p.logo} 
                            alt={`${p.name} logo`} 
                          />
                          <h4 className='mt-3 text-2xl text-foreground'>{p.name}</h4>
                          <p className=' text-neutral-400 text-sm md:text-base'>{p.summary}</p>
                          <div className='overflow-hidden transition-all h-0 group-hover:h-11 my-2 cursor-pointer text-nord-9'> 
                            <span className="pr-2">Learn more</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                
                <div className='flex justify-end mt-4 relative'>
                    <a href="/resume.pdf" target='_blank'>
                        <ShinyButton className="rounded-3xl py-4">
                            <span className='text-foreground'>View my resume</span>
                        </ShinyButton>
                    </a>
                </div>

            </div>
        </section>
    );
}

export default PortfolioSection;