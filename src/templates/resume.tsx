import React from 'react';
import jsPDF from 'jspdf';
import { graphql, HeadFC, PageProps } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLink, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const ResumePage: React.FC<PageProps<Queries.ResumePageQuery>> = ({ data }) => {

    const convertPDF = () => {
        const resume = document.getElementById('resume')!
        const pdf = new jsPDF()
        pdf.html(resume, {
            html2canvas: { scale: 0.25, },
            callback: function (pdf) {
                pdf.save("./resume.pdf");
                console.log("saved");
            },
        });
    }

    return (
        <main className='bg-neutral-200 w-screen p-2'>
            <article id='resume' className='relative mx-auto text-xs bg-white w-[21cm] h-[29cm] shadow grid grid-cols-12'>
                <div className='bg-gray-200 col-span-4 border-r-4 border-accent'>
                    <section id='about' className='bg-accent text-white p-8'>
                        <h1 className='text-5xl tracking-wider'>Zak Dowsett</h1>
                        <h3 className='text-base mt-1'>Senior Software Engineer</h3>
                        <ul className='text-sm mt-4 space-y-2 [&>li]:flex [&>li]:gap-2 [&_svg]:p-1 [&_svg]:bg-gray-200 [&_svg]:rounded [&_svg]:text-accent [&_svg]:h-4 [&_svg]:w-4'>
                            {/* <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span>z.dowsett@outlook.com</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} />
                                <span>(+44) 07426 00 2968</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMap} />
                                <span>Hertford, UK</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faLink} />
                                <span>zakdowsett.co.uk</span>
                            </li> */}
                            {/* <li>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                                <span>linkedin.com/in/zak-dowsett-4a7455131</span>         
                            </li> */}
                        </ul>
                    </section>
                    <section id='education' className='p-8'>
                        <h2 className='text-xl uppercase tracking-wider mb-1'>Education</h2>
                        <h3 className='text-base'>Computer Science (BSc)</h3>
                        <p>University of Portsmouth</p>
                        <p>09/2015 - 05/2019</p>
                        <ul className='list-dash ml-3 space-y-1 mt-2'>
                            <li>Achieved 1st class honours</li>
                            <li>Final year project implementing Fully Homomorphic Encryption into a Blockchain application</li>
                            <li>Security and Cryptography</li>
                            <li>Practical Data Analytics, Warehousing & Mining</li>
                            <li>Usability and Web Design</li>
                        </ul>
                    </section>
                    <section id='skills' className='px-8'>
                        <h2 className='text-xl uppercase tracking-wider mb-1'>Skills</h2>
                        <ul className='flex flex-wrap gap-2 [&>li]:p-2 [&>li]:rounded [&>li]:bg-accent text-white'>
                            <li>Leadership</li>
                            <li>React/VueJS</li>
                            <li>TailwindCSS</li>
                            <li>AWS</li>
                            <li>.NET</li>
                            <li>Laravel</li>
                            <li>Golang</li>
                            <li>Docker</li>
                            <li>Blockchain</li>
                            <li>Kubernetes</li>
                            <li>Atlassian</li>
                            <li>SQL/MongoDB</li>
                        </ul>
                    </section>
                    <section id='interests' className='p-8'>
                        <h2 className='text-xl uppercase tracking-wider mb-1'>Interests</h2>
                        <ul className='flex flex-wrap gap-2 [&>li]:p-2 [&>li]:rounded [&>li]:bg-accent text-white'>
                            <li>Gym</li>
                            <li>Hiking / Camping</li>
                            <li>Cybersecurity</li>
                            <li>Krav Maga</li>
                        </ul>
                    </section>
                </div>

                <div className='col-span-8 p-8 space-y-6'>
                    <section id='summary'>
                        <h2 className='text-xl uppercase tracking-wider py-1 mb-2 border-y-2 border-primary'>Summary</h2>
                        <p>
                            Quick learning and adaptable Full Stack Software Developer with 5 years of professional experience. Achieved a
                            1st in (BSc) Computer Science from the University of Portsmouth. Have a huge interest in the application of
                            blockchain and cyber security. Recently involved in leading a team of 4 developers and currently working as a
                            senior developer for a start-up.
                        </p>
                    </section>
                    <section id='work-experience'>
                        <h2 className='text-xl uppercase tracking-wider py-1 border-y-2 border-primary'>Work Experience</h2>
                        <ul className='space-y-2 py-2'>
                            {data.work.nodes.map(w => (
                                <li key={w.frontmatter?.name}>
                                    <h3 className='text-xl'>{w.frontmatter?.role}</h3>
                                    <div className='text-sm flex justify-between'>
                                        <h4>{w.frontmatter?.name}</h4>
                                        <p>{w.frontmatter?.start_date} - {w.frontmatter?.leave_date?.split('/')[1] === '2222' ? 'Now' : w.frontmatter?.leave_date}</p>
                                    </div>
                                    <p className='text-gray-500 py-1'>{w.frontmatter?.summary}</p>
                                    <ul className='list-dash ml-3 mt-1 space-y-0.5'>
                                        {w.frontmatter?.tasks?.map(t => (
                                            <li key={t}>{t}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id='projects'>
                        <h2 className='text-xl uppercase tracking-wider py-1 border-y-2 border-primary'>Projects</h2>
                        <ul className='space-y-4 py-2'>
                            {data.projects.nodes.map(p => (
                                <li key={p.frontmatter?.name}>
                                    <h3 className='text-xl'>{p.frontmatter?.name}</h3>
                                    <div className='text-sm flex justify-between'>
                                        <h4>{p.frontmatter?.role}</h4>
                                        <p>{p.frontmatter?.start_date} - {p.frontmatter?.leave_date}</p>
                                    </div>
                                    <p className='text-gray-500 py-1'>{p.frontmatter?.summary}</p>
                                    <ul className='list-dash ml-3 mt-1 space-y-0.5'>
                                        {p.frontmatter?.tasks?.map(t => (
                                            <li key={t}>{t}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>             

                {/* contour style */}
                {/* <div className='absolute bottom-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#69599b" fill-opacity="1" d="M0,320L30,304C60,288,120,256,180,208C240,160,300,96,360,85.3C420,75,480,117,540,138.7C600,160,660,160,720,149.3C780,139,840,117,900,101.3C960,85,1020,75,1080,96C1140,117,1200,171,1260,165.3C1320,160,1380,96,1410,64L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                    </svg>
                </div> */}
                {/* <div className='absolute bottom-0'>
                    <img className='h-full w-[21cm] fill-blue stroke-blue' src='/contours.svg' />
                </div>    */}
            </article>

            <Button onClick={convertPDF} variant='secondary' className='fixed bottom-4 right-4'>
                Download
                <Download />
            </Button>
        </main>
    );
}

export default ResumePage;

export const Head: HeadFC = () => <title>Resume | Zak Dowsett</title>

export const query = graphql`
    query ResumePage {
        projects: allMdx(
            filter: { frontmatter: { type: { eq: "project" }}},
        ) {
            nodes {
                frontmatter {
                    name
                    role
                    summary
                    start_date(formatString: "MM/YYYY")
                    leave_date(formatString: "MM/YYYY")
                    tasks
                }
            }
        }

        work: allMdx(
            filter: { frontmatter: { type: { eq: "work" }}},
            sort: { frontmatter: { start_date: DESC }}
        ) {
            nodes {
                frontmatter {
                    name
                    role
                    summary
                    start_date(formatString: "MM/YYYY")
                    leave_date(formatString: "MM/YYYY")
                    tasks
                }
            }
        }
    }
`