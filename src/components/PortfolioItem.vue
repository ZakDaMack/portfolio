<template>
    <v-row class="mb-4">
        <v-col cols="4">
            <v-card height="250" :rounded="8">
                <v-img cover height="100%" :src="image" :alt="name">
                    <img class="central_logo" :src="logo" alt="">
                </v-img>
            </v-card>
        </v-col>
        <v-col>
            <a :href="link">
                <h3 class="text-h4 pb-2">{{name}}</h3>
            </a>
            <slot></slot>
            <div>
                <span
                    v-for="skill in skills"
                    :key="skill"
                    class="about__skillpill pa-2 mr-2 mb-2 reset_font"
                >{{ skill }}</span>
            </div>
        </v-col>
    </v-row>
</template>

<script setup>
const props = defineProps({
    name: String,
    image: String,
    link: String,
    logo: String,
    skills: Array
});
</script>

<style lang="scss" scoped>
.reset_font {
    font-size: 1rem;
}

.v-img :deep(.v-responsive__content) {
    display: grid;
    background: rgba(0,0,0,0.5)
}

.central_logo {
    max-height: 80px;
    max-width: 80%;
    place-self: center;
}
</style>