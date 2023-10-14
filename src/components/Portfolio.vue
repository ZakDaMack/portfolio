<template>
    <article id="portfolio" class="portfolio__container py-24">
        <v-container>
            <div class="text-center pb-12">
                <h2 class="text-h2 pb-4">Portfolio</h2>
            </div>

            <v-row>
                <v-col cols="4">
                    <SplashImage image-url="https://images.unsplash.com/photo-1580086319619-3ed498161c77" 
                        name="1FIT" primary="#2CF5B8" secondary="#1D212D" />
                </v-col>
                <v-col>
                    <p class="text-body">
                        Non repellat nihil perspiciatis doloribus dolores. Earum quis blanditiis quibusdam. Possimus hic saepe id. Iure in ut rem.
                        Magnam aut vel molestiae.
                    </p>
                    <p class="text-body">
                        Sit blanditiis magni repellendus nihil consequatur. Nihil nemo corporis cumque consectetur ab est nulla necessitatibus. 
                        Nemo accusantium expedita soluta tempore et voluptas eum.
                    </p>
                    <v-btn class="ml-auto" to="/1fit">View more</v-btn>
                </v-col>
            </v-row>

            
            <div class="d-grid">
                <SplashImage image-url="https://images.unsplash.com/photo-1580086319619-3ed498161c77" 
                    name="1FIT" primary="#2CF5B8" secondary="#1D212D" />

                <!-- details -->
                <div class="my-auto w-75">
                    <h3 class="text-h4 pb-2">1FIT</h3>
                    <p class="text-body">
                        Non repellat nihil perspiciatis doloribus dolores. Earum quis blanditiis quibusdam. Possimus hic saepe id. Iure in ut rem.
                        Magnam aut vel molestiae.
                    </p>
                    <p class="text-body">
                        Sit blanditiis magni repellendus nihil consequatur. Nihil nemo corporis cumque consectetur ab est nulla necessitatibus. 
                        Nemo accusantium expedita soluta tempore et voluptas eum.
                    </p>
                    <div class="d-flex justify-end">
                        <v-btn class="ml-auto" to="/1fit">View more</v-btn>
                    </div>
                </div>
            </div>
        </v-container>
    </article>
</template>

<script setup>
import SplashImage from './SplashImage.vue';
</script>

<style lang="scss" scoped>
.portfolio__container {
    min-height: 100vh;
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