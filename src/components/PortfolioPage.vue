<template>
    <v-container fluid :style="cssProps" class="bg-grad">
        <div style="max-width: 100em;" class="mx-auto">
            <div class="d-flex" :class="{'mb-8': !mobile}">
                <v-btn
                    class="abs-btn pt-8"
                    prepend-icon="fas fa-chevron-left"
                    color="white" size="large"
                    to="/" variant="plain"
                >{{ mobile ? '' : 'Back' }}</v-btn>
                <v-spacer></v-spacer>
                <h2 class="text-h1 logo text-right">{{ props.name }}</h2>
            </div>
            <slot></slot>
            <div class="text-center">
                <v-btn size="x-large" class="rounded-xl" :href="props.siteUrl" target="_blank">Visit site</v-btn>
            </div>
        </div>
    </v-container>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const props = defineProps({
    name: String,
    primary: String,
    secondary: String,
    siteUrl: String
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

.abs-btn {
    position: absolute;
}

:deep() article p {
    padding-bottom: 1em;
}
</style>