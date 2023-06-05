<template>
  <v-main>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </v-main>
</template>

<script setup>
  //
</script>
