<template>
    <article id="portfolio" class="portfolio__container">
        <v-container fluid>
            <div class="text-center pb-12">
                <h2 class="text-h2 pb-4">Portfolio</h2>
            </div>

            <PortfolioItem
                name="1FIT"
                logo="/1fit_logo.png"
                link="https://1fit.com"
                image="https://images.unsplash.com/photo-1577992805669-c80be3285f36"
                :skills="[
                    'Laravel', 
                    'Vue',
                    'AWS',
                    'ECS',
                    'MongoDB',
                    'Flutter',
                    'Docker'
                ]"
            >
                <p class="text-body">
                    Initially started out as a freelancer before becoming a full-time Senior Software Engineer at 1FIT; a tech startup
                    in the fitness industry looking to modernise how coaches interact with and keep track of their clientelle.
                </p><p class="text-body">
                    During my freelance period, I was involved in all aspects of the devlopment life cycle, including the development
                    and design of the API server and databases, using a mix of both SQL and NoSQL databases. I then went on to assist
                    the consultant to design and build the infrastructure, utilizing Amazon's Elastic Container Service (ECS) to
                    ensure high availability and scalability. 
                </p><p class="text-body">
                    More recently, I have been learning Flutter to create a native mobile app for both Android and iOS as well as
                    using Mobile Development tools such as Codemagic to help automate deployment to the App Stores. 
                </p>
            </PortfolioItem>

            <PortfolioItem
                name="Blue Square"
                logo="/bluesquare_logo.png"
                link="https://bluesquare.uk.com"
                image="/bluesquare.jpg"
                :skills="[
                    'Laravel', 
                    'Vue',
                    'AWS',
                    'Lambda',
                    'Leadership',
                    'Solutions Design'
                ]"
            >
                <p class="text-body">
                    Headed a 5 person development team as Development Team Lead for Blue Square Marketing; a retail marketing
                    company innovating customer engagement across the buyer to customer journey, working with brands such as
                    Samsung, HP and BTEE.
                </p><p class="text-body">
                    The initial project involved creating a 'darkstore', which is a virtual store which provides a platform
                    where customers can browse online and speak to an expert instantly in a live studio environment. The software 
                    project was a success and led to a quick expansion of the development team to persue a number of new projects 
                    within the company.
                </p><p class="text-body">
                    Later projects included Teamsquare, an employee engagement and experience platform, and Experts Your Way, a
                    platform for customers, engineers and CX teams to interact with each other and the various different third
                    party platforms into a single platform. These projects were written using Laravel and Vue and served using 
                    Amazon EC2 and Cloudfront.
                </p><p class="text-body">
                    With 4 developers working across a multitude of different projects, it became necessary to put time into
                    implementing agile methodologies and DevOps to improve productivity and reduce the possibility of bugs and
                    flaws making their way into the production builds.
                </p>
            </PortfolioItem>

            <PortfolioItem
                name="Transalis"
                logo="/transalis_logo.png"
                link="https://transalis.com"
                image="https://images.unsplash.com/photo-1601897690942-bcacbad33e55"
                :skills="[
                    'Java', 
                    'React',
                    'REST/SOAP',
                    'NoSQL',
                    'Blockchain',
                ]"
            >
                <p class="text-body">
                    After graduation from the University of Portsmouth, I worked at Transalis; who are a leading supply chain 
                    automation provider, supporting businesses of all sizes with EDI, eInvoice, and system integration solutions.
                </p><p class="text-body">
                    During projects, I would work closely with clients in order to understand their requirements and build their
                    integration with with third parties. Larger integration projects would sometimes require leading small groups
                    and assign tasks based on suitability as well as informing clients and managers on the group's progress.
                </p><p class="text-body">
                    A personal project within the company was to develop a permissioned blockchain application in Java to store
                    transferred company data by consuming Kafka events. The application could then be accessed via REST API. I
                    also earned Certified Blockchain Security Professional (CBSP) certification with Blockchain Training Alliance
                    (BTA). During deployment of this application, I worked closely with the infrastructure team to help with server
                    setup, and server/app monitoring.
                </p>
            </PortfolioItem>

            <PortfolioItem
                name="Pear Technology"
                logo="/pt_logo.png"
                link="https://www.peartechnology.co.uk"
                image="/map.jpg"
                :skills="[
                    '.NET', 
                    'ASP Razor',
                    'IIS',
                ]"
            >
                <p class="text-body">
                    During my placement year, I worked as a Junior Software Developer for Pear Technology; an Ordnance Survey partner
                    which specialised in providing a range of solutions, services and software to clients such as land agents and councils. 
                </p><p class="text-body">
                    I was responsible for the company's online map shop with any new features that needed development or bugs that needed
                    fixing. I also assisted in the development of PearGIS, a greenfield project utilizng a powerful new map engine in WPF. 
                </p>
            </PortfolioItem>

        </v-container>
    </article>
</template>

<script setup>
import PortfolioItem from './PortfolioItem.vue';
</script>

<style lang="scss" scoped>
.portfolio__container {
    min-height: 100vh;
    padding: 64px;
    background-color: rgba(211, 211, 211, 0.2);
    .v-container {
        max-width: 100em;
        margin: 0 auto;
    }
}

@media only screen and (max-width: 600px) {
    .portfolio__container {
        padding: 64px 0;
    }
}

.text-body {
    font-size: 1.2rem;
    padding-bottom: 1em;
}

.d-grid {
    display: grid;
    // grid-template-columns: 1fr 1fr;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

</style>