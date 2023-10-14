<template>
    <v-img cover :src="props.imageUrl" :style="cssProps" :aspect-ratio="16/9" width="75%"
        :lazy-src="`${props.imageUrl}?auto=format&fit=crop&w=400&q=80`" class="mx-auto"
    >
        <div class="center-grid bg">
            <h3 class="text-h1 pa-2 logo">{{ props.name }}</h3>
        </div>
    </v-img>
</template>

<script setup>
import { defineProps, computed } from 'vue';
const props = defineProps({
    name: String,
    imageUrl: String,
    primary: String,
    secondary: String
});

const cssProps = computed(() => ({
    '--primary': props.primary,
    '--secondary': props.secondary
}));

</script>

<style lang="scss" scoped>
.center-grid {
  display: grid;
  height: 100%;
  h3 {
    text-align: center;
    place-self: center;
  }
}

.logo {
  background: linear-gradient(45deg, var(--secondary), var(--primary) 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg {
  background: radial-gradient(circle at bottom left, rgba(var(--primary),0.5), rgba(var(--secondary),0.8) 50%);
}

:deep() article p {
    padding-bottom: 1em;
}
</style>