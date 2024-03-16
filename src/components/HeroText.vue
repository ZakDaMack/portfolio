<template>
    <div id="hero-text">
        <div class="line">
            <div class="word">Zak</div>
            <div class="word">Dowsett</div>
        </div>
        <div class="line">
            <div class="word">FullStack</div>
            <div class="word">Dev</div>
        </div>
        <!-- internal links -->
        <div class="line">
            <a data-value="CV" class="word styled" href="/resume.pdf" target="_blank">CV</a>
            <div data-value="PORTFOLIO" class="word styled" @click="toPortfolio">Portfolio</div>
        </div>
        <!-- links -->
        <div class="line">
            <a data-value="LINKEDIN" class="word styled" href="https://linkedin.com/in/zak-dowsett-4a7455131/" target="_blank">LinkedIn</a>
            <a data-value="BLOG" class="word styled" @click="toBlog">Blog</a>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";

const toPortfolio = () => document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
const toBlog = () => document.getElementById("blog").scrollIntoView({ behavior: "smooth" });

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let interval = null;

onMounted(() => {
  const els = document.querySelectorAll(".styled");
  els.forEach(el => el.onmouseover = e => {
    let iteration = 0;
  
    clearInterval(interval);
    interval = setInterval(() => {
        e.target.innerText = e.target.innerText
        .split("")
        .map((l, index) => {
            if(index < iteration) {
              return e.target.dataset.value[index];
            }
        
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        
        if(iteration >= e.target.dataset.value.length){ 
        clearInterval(interval);
        }
        
        iteration += 1 / 3;
    }, 30);
  })

  els.forEach(el => el.onmouseleave = e => {
    console.log("mouseleave");
    e.target.innerText =  e.target.dataset.value;
  })
})

</script>

<style lang="scss" scoped>

#hero-text:has(.styled:hover) .word:not(.styled:hover) {
  opacity: 0.3;
}

.word {
  font-family: 'Rubik Mono One', sans-serif;
  font-size: clamp(1.8rem, 5vw, 6rem);
  color: white;
  text-transform: uppercase;
  line-height: 1em;
  transition: opacity 300ms ease; 
}
.word {
  margin-right: 1em;
}

.styled {
  cursor: pointer;
  text-decoration: none;
}

.line {
  display: flex;
  justify-content: space-between;
}
</style>
