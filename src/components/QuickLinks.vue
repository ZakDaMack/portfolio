<template>
    <div class="link__container">
        <h3 class="d-block d-sm-none pl-3">Social</h3>
        <v-btn
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            :icon="link.icon"
            variant="text"
            target="_blank"
            class="link__icon"
        ></v-btn>
    </div>
</template>

<script setup>
const links = [
    { icon: "fab fa-github-alt", href: "https://github.com/ZakDaMack/" },
    { icon: "fab fa-linkedin-in", href: "https://linkedin.com/in/zak-dowsett-4a7455131/" },
    { icon: "fas fa-envelope", href: "mailto:z.dowsett@outlook.com" },
    { icon: "fab fa-docker", href: "https://hub.docker.com/u/zakdamack/" }
];
</script>

<style lang="scss" scoped>
    .link__container {
        background: #FFFFFF;
        padding: 6px;
        display: flex;
        flex-direction: column;
        position: fixed;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        box-shadow: rgba(100,100,111,.2) 0 7px 29px 0;
    }

    .link__icon {
        border-radius: 5px;
        &:hover {
            background: linear-gradient(#52304188, #dc8a4f88);
        }
    }

    @media only screen and (max-width: 600px) {
        .link__container {
            color: #FFFFFF;
            background: #000000;
            display: block;
            position: relative;
            border-radius: 0;
            transform: none;
        }
    }
</style>