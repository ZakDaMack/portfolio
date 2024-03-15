<template>
    <v-hover v-slot="{ isHovering, props }">
        <a :href="link">
            <v-card  rounded="lg" :elevation="isHovering ? 24 :16"
                v-bind="props" :href="link" height="100%"
            >
                <v-img cover :src="image" :alt="name" height="50%" max-height="300">
                </v-img>
                <v-card-text>
                    <h3 class="text-h6 pb-4">{{ title }}</h3>
                    <p class="text-body reset-font">{{ extract }}</p>
                </v-card-text>
            </v-card>
        </a>
    </v-hover>
</template>

<script setup>
const componentProps = defineProps({
    title: String,
    extract: String,
    image: String,
    link: String
});
</script>

<style lang="scss" scoped>
.reset_font {
    font-size: 1rem;
}

.v-img :deep(.v-responsive__content) {
    background: rgba(0,0,0,0.5)
}

.text-h6 {
    line-height: normal;
}

a {
    color: black;
    text-decoration: none;
    :deep(i) {
        font-size: 14px;
        margin-bottom: 16px;
    }
}
</style>