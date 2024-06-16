<template>
    <article id="about" class="about__container">
        <v-container fluid>
            <div class="text-center pb-12">
                <h2 class="text-h2 pb-4">About Me</h2>
                <p class="about__intro text-center text-body">
                    I'm a full stack developer with over 5 years of professional experience.
                    Find out more about me, such as my skills and history, below.
                </p>
            </div>

            <div class="d-grid">
                <!-- about -->
                <div class="text-justify">
                    <h3 class="text-h4 pb-2">Who Am I?</h3>
                    <p class="text-body">
                        I am a quick learning and adaptable <b>Full-Stack Software Developer</b> with over 5 years of professional experience.
                        I achieved a 1st with Honours in (BSc) Computer Science from the University of Portsmouth and have since been
                        involved in a number of greenfield projects. 
                    </p><p class="text-body">  
                        More recently, I worked as <b>Development Team Lead</b>, managing multiple projects and mentoring colleagues to release a number 
                        of SaaS solutions to brands such as Samsung, Hydrow and HP. The work required the use of agile methodologies and liasing with 
                        both the product owners and project manager. The multitude of projects for our small team required automation wherever possible
                        in order to keep the work productive and bug-free.
                    </p><p class="text-body">  
                        During my time at university, I had a huge interest in the application of blockchain and cyber security, which 
                        I have applied at work and also in my freetime, working on my homelab, constantly furthering my knowledge. 
                    </p>
                </div>


                <!-- skills -->
                <div>
                    <h3 class="text-h4 pb-2">Skills</h3>
                    <span
                        v-for="skill in skills"
                        :key="skill"
                        class="about__skillpill"
                    >{{ skill }}</span>
                </div>
            </div>
        </v-container>
    </article>
</template>

<script setup>
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
</script>

<style lang="scss" scoped>
.about__container {
    min-height: 90vh;
    padding: 64px;
    .v-container {
        max-width: 100em;
        margin: 0 auto;
    }
}

@media only screen and (max-width: 600px) {
    .about__container {
        padding: 64px 0;
    }
}

.about__intro {
    max-width: 40em;
    margin: 0 auto;
}

.d-grid {
    display: grid;
    // grid-template-columns: 1fr 1fr;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10rem;
}
</style>