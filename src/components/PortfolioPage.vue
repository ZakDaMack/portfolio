<template>
    <v-container fluid :style="cssProps" class="bg-grad">
        <div class="d-flex pa-4">
            <v-spacer></v-spacer>
            <h2 class="text-h1 logo text-right">{{ props.name }}</h2>
        </div>
        <div class="pa-8 d-flex flex-column flex-md-row">
            <slot></slot>
        </div>
        <div class="text-center">
            <v-btn size="x-large" class="rounded-xl" href="https://bluesquare.uk.com" target="_blank">Visit site</v-btn>
        </div>
    </v-container>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    name: String,
    primary: String,
    secondary: String
});

const cssProps = computed(() => ({
    '--primary': props.primary,
    '--secondary': props.secondary
}));

</script>

<style lang="scss" scoped>
.bg-grad {
    background: var(--primary);
    background: radial-gradient(circle at bottom left, var(--secondary), var(--primary) 70%);
    min-height: 100vh;
}

.logo {
    background: linear-gradient(45deg, var(--primary), var(--secondary) 30%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

:deep() article p {
    padding-bottom: 1em;
}
</style>