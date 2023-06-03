<template>
  <v-img cover height="100vh" src="https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7" gradient="90deg, black 0%, transparent 60%">
    <v-container class="h-screen restrict-w d-flex align-center justify-center justify-md-space-between">
      
      <hero-text></hero-text>
      
      <v-avatar size="200" class="d-none d-md-block">
        <v-img
          cover
          src="https://images.unsplash.com/photo-1519575706483-221027bfbb31"
          alt="Zak"
        ></v-img>
      </v-avatar>
      
    </v-container>
  </v-img>

  <!-- projects -->
  <div class="grid">
    <div class="title">Projects</div>

    <v-img cover src="https://images.unsplash.com/photo-1580086319619-3ed498161c77">
      <div class="center-grid fit-bg">
        <h3 class="text-h1 pa-2 fit-logo">1FIT</h3>
      </div>
      
    </v-img>
    <v-img cover src="https://images.unsplash.com/photo-1481437156560-3205f6a55735">
      <div class="center-grid bs-bg">
      <h3 class="text-h1 pa-2 bs-logo">Blue Square</h3>
      </div>
    </v-img>
  </div>

  <one-fit />
  <blue-square />
</template>

<script setup>
import HeroText from "@/components/HeroText.vue";
import OneFit from "@/components/projects/1Fit.vue"
import BlueSquare from "@/components/projects/Bluesquare.vue"
</script>

<style lang="scss" scoped>
.grid {
  position: relative;
  display: grid;
  cursor: pointer;
  // grid-template-columns: 1fr 1fr;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  .v-img {
    aspect-ratio: 1;
  }
}

.center-grid {
  display: grid;
  height: 100%;
  h3 {
    place-self: center;
  }
}

.title {
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: 'Rubik Mono One', sans-serif;
  font-size: clamp(2rem, 3vw, 6rem);
  color: white;
  text-transform: uppercase;
  line-height: 1em;
  transition: opacity 300ms ease; 
  z-index: 10;
}

.fit-logo {
  background: linear-gradient(45deg, #1D212D, #2CF5B8 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.fit-bg {
  background: radial-gradient(circle at bottom left, rgba(#2CF5B8,0.5), rgba(#1D212D,0.5) 50%);
}

.bs-logo {
  background: linear-gradient(45deg, #182741, #0CA3E5 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bs-bg {
  background: radial-gradient(circle at bottom left, rgba(#0CA3E5,0.5), rgba(#1D212D,0.8) 50%);
}

</style>
