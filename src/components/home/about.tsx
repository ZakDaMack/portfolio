import { FC } from "react"
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

import Image from "next/image";
import { ShinyButton } from "@/components/ui/shiny-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faCode, faDesktop } from "@fortawesome/free-solid-svg-icons";

const skills = {
    'Front-end': [
        'Typescript',
        'VueJS',
        'React',
        'Tailwind'
    ],
    'Backend': [
        'SQL',
        'MongoDB',
        'Laravel',
        'C#',
        'Java',
        'Golang',
        'NodeJS'
    ],
    'Tools': [
        'Blockchain',
        'AWS',
        'Docker',
        'Kubernetes',
        'Atlassian',
        'Microservice Architecture'
    ],
}   

const cardProps = {
    className: "rounded-2xl border px-6 py-12 bg-white/10 dark:bg-black/10 backdrop-blur-sm z-10",
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
}

const About: FC = () => {
    return (
        <section id="about" className={cn(
            "py-16 px-4 md:px-24 min-h-[90vh] relative",
            "before:bg-[url(/lines.svg)] before:bg-cover before:opacity-10 before:left-0 before:right-0 before:bottom-10 before:absolute before:h-full"
        )}>
            <div className="container max-w-[80em] mx-auto">
        
                {/* intro */}
                <div className="mx-auto px-4 my-16 md:my-24 max-w-screen-sm lg:max-w-5xl text-center md:text-left">
                    <div className="flex gap-x-8 gap-y-4 flex-col md:flex-row items-center">
                        <motion.div 
                            initial={{rotate: '-360deg', x: -200, opacity: 0}} 
                            whileInView={{rotate: '0deg', x: 0, opacity: 1}}
                            transition={{type: 'spring', duration: 1}}
                            viewport={{once: true}}
                        >
                            <Image 
                                src='/zakdowsett.png'
                                alt="Zak Dowsett" 
                                width={140} height={140}
                                className="w-[140px] rounded-full drop-shadow-lg"
                            />
                        </motion.div>
                        <div className="text-2xl sm:text-4xl lg:text-6xl font-bold space-y-1">
                            <h2>
                                Hi, I&apos;m <span className="text-nord-10">Zak Dowsett</span>
                                <motion.span 
                                    className="pl-3 origin-[70%_70%] inline-block" 
                                    initial={{rotate: '-8deg'}} 
                                    whileInView={{rotate: '14deg'}}
                                    transition={{repeat: Infinity, type: 'spring', duration: 1.5, repeatType: 'reverse', repeatDelay: 0}}
                                >👋🏻</motion.span>
                            </h2>
                            <p>A <span className="text-nord-10">Senior Software Engineer</span></p>
                        </div>
                    </div>
                    <p className='mt-3 text-xl'>
                        I&apos;m a <span className="font-semibold">senior software engineer</span> with over <span className="font-semibold">6 years</span> of 
                        professional experience in all areas. I have worked on a variety of projects across the stack, from snazzy, 
                        front-end websites, all the way back to the infrastructure that runs your apps and services
                    </p>
                </div>

                {/* details grid */}
                <div className="grid lg:grid-cols-3 gap-8 bg-[radial-gradient()] from-fuchsia-400 to-teal-400">
                    <motion.div {...cardProps}>
                        <div className="rounded-full w-16 bg-nord-9 aspect-square grid">
                            <FontAwesomeIcon fontSize={32} icon={faDesktop} className="text-white place-self-center" />
                        </div>
                        <h3 className="text-3xl pt-6 pb-12">What can I do?</h3>
                        <ul className='text-lg space-y-1'>
                            <li>Front-end Development</li>
                            <li>Mobile Development</li>
                            <li>Backend Development</li>
                            <li>Event-driven Architecture</li>
                            <li>API Integration</li>
                            <li>AWS Infrastructure</li>
                            <li>Databse Design</li>
                        </ul>
                    </motion.div>

                    <motion.div {...cardProps} transition={{delay: 0.1}}>
                        <div className="rounded-full w-16 bg-nord-11 grid aspect-square">
                            <FontAwesomeIcon fontSize={32} icon={faCode} className="text-white place-self-center" />
                        </div>
                        <h3 className="text-3xl pt-6 pb-12">What do I know?</h3>
                        <ul className='text-lg space-y-1'>
                            {Object.entries(skills).map(([key, val]) => (
                                <li key={key}>
                                    <p>{key}</p> 
                                    <p className="text-sm text-neutral-500 pb-2">{val.join(', ')}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div {...cardProps} transition={{delay: 0.2}}>
                        <div className="rounded-full w-16 bg-nord-15 grid aspect-square">
                            <FontAwesomeIcon fontSize={32} icon={faAward} className="text-white place-self-center" />
                        </div>
                        <h3 className="text-3xl pt-6 pb-12">What have I achieved?</h3>
                        <ul className='text-lg space-y-1'>
                            <li>
                                <span className='font-bold'>Certified Blockchain Security Professional</span> via the <a href="https://blockchaintrainingalliance.com/" target='_blank'>Blockchain Training Alliance</a> 
                            </li>
                        </ul>
                    </motion.div>
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

export default About;