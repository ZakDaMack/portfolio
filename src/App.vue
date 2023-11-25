<template>
  <!-- <v-banner v-show="open" elevation="5" style="z-index: 1000; padding: 8px;" position="fixed" icon="fas fa-triangle-exclamation" color="yellow-accent-4">
    <v-banner-text class="text-h6 pa-0 d-flex justify-space-between align-center">
      <span>
        This site is currently under development. If you would like to know more about me feel free to 
        <a href="mailto:z.dowsett@outlook.com">reach out</a> 
      </span>
      <v-btn icon="fas fa-xmark" size="small" variant="text" color="black" @click="open = false"></v-btn>
    </v-banner-text>
  </v-banner> -->
  <router-view />
  
  <quick-links />
</template>

<script setup>
  import { ref } from 'vue';
  import QuickLinks from './components/QuickLinks.vue';

  const open = ref(true);
</script>
