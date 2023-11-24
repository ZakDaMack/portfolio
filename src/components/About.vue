<template>
    <article id="about" class="about__container">
        <v-container>
            <div class="text-center pb-12">
                <h2 class="text-h2 pb-4">About Me</h2>
                <p class="text-body">lorem ipsum blah bblah</p>
            </div>

            <div class="d-grid">
                <!-- about -->
                <div class="text-justify">
                    <h3 class="text-h4 pb-2">Who Am I?</h3>
                    <p class="text-body">
                        Quick learning and adaptable Full Stack Software Developer with 5
years of professional experience. Achieved a 1st in (BSc) Computer
Science from the University of Portsmouth. Have a huge interest in the
application of blockchain and cyber security. Recently involved in
leading a team of 4 developers and freelancing in my free time.
                    I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                    </p><p class="text-body">
                    I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
                    </p><p class="text-body">
                    I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
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
    'Docker'
];
</script>

<style lang="scss" scoped>
.about__container {
    min-height: 90vh;
    padding: 64px 0;
}

.d-grid {
    display: grid;
    // grid-template-columns: 1fr 1fr;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10rem;
}
</style>