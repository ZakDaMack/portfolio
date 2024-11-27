import { FC } from "react"
import PortfolioItem from "@/components/portfolio_item";

import OneFitLogo from '@/assets/1fit_logo.png'
import OneFitBG from '@/assets/gym.jpg'

import FuelfinderLogo from '@/assets/fuelfinder_logo.png'
import FuelFinderBG from '@/assets/fuel.jpg'

import BluesquareLogo from '@/assets/bluesquare_logo.png'
import BluesquareBG from '@/assets/bluesquare.jpg'

import TransalisLogo from '@/assets/transalis_logo.png'
import TransalisBG from '@/assets/containers.jpg'

import PearLogo from '@/assets/pt_logo.png'
import PearBG from '@/assets/map.jpg'

const Portfolio: FC = () => {
    return (
        <section id="portfolio" className="py-16 px-3 md:px-24 min-h-[90vh] bg-gray-100 dark:bg-gray-800">
            <div className="container max-w-[80em] mx-auto">

                <div className="text-center pb-12">
                    <h2 className="text-6xl pb-4 font-light">Portfolio</h2>
                    {/* <p className="about__intro text-center text-xl">
                        I'm a full stack developer with over 5 years of professional experience.
                        Find out more about me, such as my skills and history, below.
                    </p> */}
                </div>

                <div className="space-y-16">
            
                    <PortfolioItem
                        name="1FIT"
                        logo={OneFitLogo}
                        link="https://1fit.com"
                        background={OneFitBG}
                        skills={['Laravel', 'Vue', 'React', 'AWS', 'ECS', 'MongoDB', 'Flutter', 'Docker']}
                    >
                        <p className="text-xl">
                            Initially started out as a freelancer before becoming a full-time Senior Software Engineer at 1FIT; a tech startup
                            in the fitness industry looking to modernise how coaches interact with and keep track of their clientelle.
                        </p><p className="text-xl">
                            During my freelance period, I was involved in all aspects of the devlopment life cycle, including the development
                            and design of the API server and databases, using a mix of both SQL and NoSQL databases. I then went on to assist
                            the consultant to design and build the infrastructure, utilizing Amazon's Elastic Container Service (ECS) to
                            ensure high availability and scalability. 
                        </p><p className="text-xl">
                            I have also worked on a client app using Flutter to create a native mobile app for both Android and iOS as well as
                            using Mobile Development tools such as Codemagic to help automate deployment to the App Stores.
                        </p>
                    </PortfolioItem>

                    <PortfolioItem
                        name="FuelFinder"
                        logo={FuelfinderLogo}
                        link="https://fuelfinder.zakdowsett.co.uk"
                        background={FuelFinderBG}
                        skills={['React', 'Golang', 'gRPC', 'Mongo', 'Microservices', 'Docker']}
                    >
                        <p className="text-xl">
                            FuelFinder is a web app designed to show the cheapest fuel in your area, provided by gov fuel price data. It regularly
                            polls and collects data published on the gov website to show the cheapest fuel stations in your area. 
                        </p><p className="text-xl">
                            The front end has been developed with a mobile-first approach in React, using Redux, with the microservices created using
                            Go and containerized in Docker. The microservices communicate using gRPC, with a small REST gateway to communicate with 
                            the frontend. Any rate limiting is handled by the reverse proxy. The web scraper polls for new data every 15 minutes and
                            indexes the station data in Mongo.
                        </p>
                    </PortfolioItem>

                    <PortfolioItem
                        name="Blue Square"
                        logo={BluesquareLogo}
                        link="https://bluesquare.uk.com"
                        background={BluesquareBG}
                        skills={['Laravel', 'Vue', 'AWS', 'Lambda', 'Leadership', 'Solutions Design']}
                    >
                        <p className="text-xl">
                            Headed a 5 person development team as Development Team Lead for Blue Square Marketing; a retail marketing
                            company innovating customer engagement across the buyer to customer journey, working with brands such as
                            Samsung, HP and BTEE.
                        </p><p className="text-xl">
                            The initial project involved creating a 'darkstore', which is a virtual store which provides a platform
                            where customers can browse online and speak to an expert instantly in a live studio environment. The software 
                            project was a success and led to a quick expansion of the development team to persue a number of new projects 
                            within the company.
                        </p><p className="text-xl">
                            Later projects included Teamsquare, an employee engagement and experience platform, and Experts Your Way, a
                            platform for customers, engineers and CX teams to interact with each other and the various different third
                            party platforms into a single platform. These projects were written using Laravel and Vue and served using 
                            Amazon EC2 and Cloudfront.
                        </p><p className="text-xl">
                            With 4 developers working across a multitude of different projects, it became necessary to put time into
                            implementing agile methodologies and DevOps to improve productivity and reduce the possibility of bugs and
                            flaws making their way into the production builds.
                        </p>
                    </PortfolioItem>

                    <PortfolioItem
                        name="Transalis"
                        logo={TransalisLogo}
                        link="https://transalis.com"
                        background={TransalisBG}
                        skills={['Java', 'React', 'REST/SOAP', 'NoSQL', 'Blockchain']}
                    >
                        <p className="text-xl">
                            After graduation from the University of Portsmouth, I worked at Transalis; who are a leading supply chain 
                            automation provider, supporting businesses of all sizes with EDI, eInvoice, and system integration solutions.
                        </p><p className="text-xl">
                            During projects, I would work closely with clients in order to understand their requirements and build their
                            integration with with third parties. Larger integration projects would sometimes require leading small groups
                            and assign tasks based on suitability as well as informing clients and managers on the group's progress.
                        </p><p className="text-xl">
                            A personal project within the company was to develop a permissioned blockchain application in Java to store
                            transferred company data by consuming Kafka events. The application could then be accessed via REST API. I
                            also earned Certified Blockchain Security Professional (CBSP) certification with Blockchain Training Alliance
                            (BTA). During deployment of this application, I worked closely with the infrastructure team to help with server
                            setup, and server/app monitoring.
                        </p>
                    </PortfolioItem>

                    <PortfolioItem
                        name="Pear Technology"
                        logo={PearLogo}
                        link="https://www.peartechnology.co.uk"
                        background={PearBG}
                        skills={['.NET', 'ASP Razor', 'IIS']}
                    >
                        <p className="text-xl">
                            During my placement year, I worked as a Junior Software Developer for Pear Technology; an Ordnance Survey partner
                            which specialised in providing a range of geospatial solutions, services and software to clients such as land agents and councils. 
                        </p><p className="text-xl">
                            I was responsible for the company's online map shop with any new features that needed development or bugs that needed
                            fixing. I also assisted in the development of PearGIS, a greenfield project utilizng a powerful new map engine in WPF. 
                        </p>
                    </PortfolioItem>

                </div>

            </div>
        </section>
    );
}

export default Portfolio;