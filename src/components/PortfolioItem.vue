<template>
    <v-row class="mb-8">
        <v-col cols="4">
            <v-hover v-slot="{ isHovering, props }">
                <a :href="link">
                    <v-card  height="250" rounded="lg" :elevation="link && isHovering ? 24 :16"
                        v-bind="props" :href="link" target="_blank"
                    >
                        <v-img cover height="100%" :src="image" :alt="name" 
                        :lazy-src="`${image}?auto=format&fit=crop&w=100&q=80`"
                        >
                            <img class="central_logo" :src="logo" alt="">
                        </v-img>
                    </v-card>
                </a>
            </v-hover>
        </v-col>
        <v-col>
            <a class="title-link" :href="link">
                <h3 class="text-h4 pb-2">
                    {{name}}
                    <v-icon icon="fas fa-arrow-up-right-from-square" />
                </h3>
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

.title-link {
    color: black;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        color: #0000EE;
    }
    :deep(i) {
        font-size: 14px;
        margin-bottom: 16px;
    }
}
</style>