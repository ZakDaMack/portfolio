<template>
    <article id="portfolio" class="portfolio__container py-24">
        <v-container>
            <div class="text-center pb-12">
                <h2 class="text-h2 pb-4">Portfolio</h2>
            </div>

            <PortfolioItem
                name="1FIT"
                logo="/1fit_logo.png"
                image="https://images.unsplash.com/photo-1577992805669-c80be3285f36"
                :skills="[
                    'Laravel', 
                    'Vue',
                    'AWS',
                    'ECS',
                    'MongoDB',
                    'Flutter'
                ]"
            >
                <p class="text-body">
                    Initially started out as a freelancer before becoming a full-time Senior Software Engineer at 1FIT; a tech startup in the
                    fitness industry looking to modernise how coaches interact with and keep track of their clientelle.
                </p>
                <p class="text-body">
                    
                </p>
            </PortfolioItem>

            <PortfolioItem
                name="Blue Square"
                logo="/bluesquare_logo.png"
                image="/bluesquare.jpg"
                :skills="[
                    'Laravel', 
                    'Vue',
                    'AWS',
                    'ECS',
                    'MongoDB',
                    'Flutter'
                ]"
            >
                <p class="text-body">
                    twatawtwatat
                    Non repellat nihil perspiciatis doloribus dolores. Earum quis blanditiis quibusdam. Possimus hic saepe id. Iure in ut rem.
                    Magnam aut vel molestiae.
                </p>
                <p class="text-body">
                    Sit blanditiis magni repellendus nihil consequatur. Nihil nemo corporis cumque consectetur ab est nulla necessitatibus. 
                    Nemo accusantium expedita soluta tempore et voluptas eum.
                </p>
            </PortfolioItem>

            
            <PortfolioItem
                name="Transalis"
                logo="/transalis_logo.png"
                image="https://images.unsplash.com/photo-1601897690942-bcacbad33e55"
                :skills="[
                    'Laravel', 
                    'Vue',
                    'AWS',
                    'ECS',
                    'MongoDB',
                    'Flutter'
                ]"
            >
                <p class="text-body">
                    twatawtwatat
                    Non repellat nihil perspiciatis doloribus dolores. Earum quis blanditiis quibusdam. Possimus hic saepe id. Iure in ut rem.
                    Magnam aut vel molestiae.
                </p>
                <p class="text-body">
                    Sit blanditiis magni repellendus nihil consequatur. Nihil nemo corporis cumque consectetur ab est nulla necessitatibus. 
                    Nemo accusantium expedita soluta tempore et voluptas eum.
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
    padding: 64px 0;
    background-color: rgba(211, 211, 211, 0.2);
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