<template>
  <v-banner v-show="open" elevation="5" style="z-index: 1000;" position="fixed" icon="fas fa-triangle-exclamation" color="yellow-accent-4">
    <v-banner-text class="text-h6">
      This site is currently under development. If you would like to know more about me feel free to 
      <a href="mailto:z.dowsett@outlook.com">reach out</a> 
    </v-banner-text>
    <v-banner-actions>
      <v-btn icon="fas fa-close" @click="open = false"></v-btn>
    </v-banner-actions>
  </v-banner>
  <router-view />
</template>

<script setup>
  import { ref } from 'vue';
  const open = ref(true);
</script>
