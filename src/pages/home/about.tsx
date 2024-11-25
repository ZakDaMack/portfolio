import { FC } from "react"

const About: FC = () => {
    const skills = [
        'Javascript',
        'VueJS',
        'Laravel',
        'Linux',
        'SQL',
        'Mongo',
        'Blockchain',
        'Leadership',
        '.NET',
        'AWS',
        'Atlassian',
        'Docker',
        'Microservices',
        'Golang',
        'React'
    ];
    
    return (
        <section id="about" className="py-16 px-3 md:px-24 min-h-[90vh]">
            <div className="container max-w-[80em] mx-auto">

                <div className="text-center pb-12">
                    <h2 className="text-6xl pb-4 font-light">About Me</h2>
                    <p className="text-center text-xl">
                        I'm a full stack developer with over 5 years of professional experience.
                        Find out more about me, such as my skills and history, below.
                    </p>
                </div>

                <div className="flex gap-10 flex-col md:flex-row">
                    <div className="flex-1 text-justify space-y-2">
                        <h3 className="text-3xl">Who Am I?</h3>
                        <p className="text-xl">
                            I am a quick learning and adaptable <b>Full-Stack Software Developer</b> with over 5 years of professional experience.
                            I achieved a 1st with Honours in (BSc) Computer Science from the University of Portsmouth and have since been
                            involved in a number of greenfield projects. 
                        </p><p className="text-xl">  
                            More recently, I worked as <b>Development Team Lead</b>, managing multiple projects and mentoring colleagues to release a number 
                            of SaaS solutions to brands such as Samsung, Hydrow and HP. The work required the use of agile methodologies and liasing with 
                            both the product owners and project manager. The multitude of projects for our small team required automation wherever possible
                            in order to keep the work productive and bug-free.
                        </p><p className="text-xl">  
                            During my time at university, I had a huge interest in the application of blockchain and cyber security, which 
                            I have applied at work and also in my freetime, working on my homelab, constantly furthering my knowledge. 
                        </p>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-3xl pb-2">Skills</h3>
                        <div className="flex flex-wrap gap-4">
                            {skills.map(skill => (
                                <div
                                    key={skill}
                                    className="d-inline-block px-8 py-4 bg-neutral-200 text-black rounded"
                                >{skill}</div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;