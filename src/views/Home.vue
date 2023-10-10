<template>
  <v-img cover height="100vh" lazy-src="https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?auto=format&fit=crop&w=400&q=80"
    src="https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7" gradient="90deg, black 0%, transparent 60%"
  >
    <v-container class="h-screen restrict-w d-flex flex-column flex-md-row align-center justify-center justify-md-space-between">
      
      <hero-text class=""></hero-text>
      
      <div class="w-100 d-flex justify-center">
        <v-avatar size="250" class="ml-0 ml-md-8 mt-8 mt-md-0">
          <v-img
            cover
            src="@/assets/zakdowsett.png"
            alt="Zak"
          ></v-img>
        </v-avatar>
      </div>
      
    </v-container>
  </v-img>

  <!-- projects -->
  <div class="grid">
    <div class="title" id="portfolio">Portfolio</div>

    <!-- 1fit link -->
    <router-link to="1fit">
      <v-img cover src="https://images.unsplash.com/photo-1580086319619-3ed498161c77"
        lazy-src="https://images.unsplash.com/photo-1580086319619-3ed498161c77?auto=format&fit=crop&w=400&q=80"
      >
        <div class="center-grid fit-bg">
          <h3 class="text-h1 pa-2 fit-logo">1FIT</h3>
        </div>
      </v-img>
    </router-link>

    <!-- bluesquare link -->
    <router-link to="bluesquare">
      <v-img cover src="https://images.unsplash.com/photo-1481437156560-3205f6a55735"
        lazy-src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=400&q=80"
      >
        <div class="center-grid bs-bg">
          <h3 class="text-h1 pa-2 bs-logo">Blue Square</h3>
        </div>
      </v-img>
    </router-link>
    
    <!-- transalis link -->
    <router-link to="transalis">
      <v-img cover src="https://images.unsplash.com/photo-1606964212858-c215029db704"
        lazy-src="https://images.unsplash.com/photo-1606964212858-c215029db704?auto=format&fit=crop&w=400&q=80"
      >
        <div class="center-grid transalis-bg">
          <h3 class="text-h1 pa-2 transalis-logo">Transalis</h3>
        </div>
      </v-img>
    </router-link>
  </div>
</template>

<script setup>
import HeroText from "@/components/HeroText.vue";
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
  a {
    text-decoration: none;
  }
}

.center-grid {
  display: grid;
  height: 100%;
  h3 {
    text-align: center;
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

.transalis-logo {
  background: linear-gradient(45deg, #2C3538, #00AAE0 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.transalis-bg {
  background: radial-gradient(circle at bottom left, rgba(#00AAE0,0.5), rgba(#2C3538,0.8) 50%);
}

[class$="-bg"]:hover {
  [class$="-logo"] {
    font-size: 7rem !important;
    transition: font-size 0.35s linear;
  }
}


</style>
