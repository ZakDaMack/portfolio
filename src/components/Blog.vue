<template>
    <article id="blog" class="blog__container">
        <v-container fluid>
            <div class="text-center pb-12">
                <h2 class="text-h2 pb-4">Blog</h2>
                <p class="blog__intro text-center text-body">
                    Recently, I've started homelabbing to improve my DevOps and
                    infrastructure skillset. Going forward, I am to write about what I've learnt
                    for future reference and hopefully to help others as well. View my latest posts 
                    below, or go to 
                </p>
                <a class="blog__intro text-center text-body" href="https://blog.zakdowsett.co.uk/">https://blog.zakdowsett.co.uk/</a>
            </div>


            <v-row>
                <v-col v-for="item in posts" cols="12" md="4">
                    <BlogItem 
                        :key="item.id"
                        :title="item.title"
                        :extract="item.excerpt"
                        :link="item.url"
                        :image="item.feature_image"
                    />
                </v-col>
            </v-row>

        </v-container>
    </article>
</template>

<script setup>
import { ref } from 'vue';
import BlogItem from './BlogItem.vue';

const posts = ref([]);
fetch('https://blog.zakdowsett.co.uk/ghost/api/content/posts/?key=44a65805ff949082d0ff581ab1&include=tags&limit=3')
    .then(res => res.json())
    .then(data => posts.value = data.posts)

</script>

<style lang="scss" scoped>
.blog__container {
    min-height: 70vh;
    padding: 64px;
    .v-container {
        max-width: 100em;
        margin: 0 auto;
    }
}

@media only screen and (max-width: 600px) {
    .blog__container {
        padding: 64px 0;
    }
}

.blog__intro {
    max-width: 40em;
    margin: 0 auto;
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