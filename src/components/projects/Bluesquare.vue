<template>
    <div class="h-screen bg-grad">
        <div class="d-flex pa-4">
            <v-spacer></v-spacer>
            <h2 class="text-h1 logo">blue square</h2>
        </div>
        <div class="pa-8 d-flex">
            <v-img width="50%" src="@/assets/bluesquare.png"></v-img>
            <article class="text-white">
                <p>Blue Square was founded in 2009, with a core belief that human touch and innovative technology could help brands engage with their customers, growing sales and increasing loyalty.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>test</p>
            </article>
        </div>
        <div class="text-center">
            <v-btn size="x-large" class="rounded-xl" href="https://bluesquare.uk.com" target="_blank">Visit site</v-btn>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$primary: #182741;
$secondary: #0CA3E5;

.bg-grad {
    background: $primary;
    background: radial-gradient(circle at bottom left, $secondary, $primary 70%);
}

.logo {
    background: linear-gradient(45deg, $primary, $secondary 30%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>