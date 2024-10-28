<template>
    <v-container class="px-4 px-m-2 px-m-2 container">
        <HomeViewHero />
    </v-container>
</template>

<script setup lang="ts">
import HomeViewHero from "@/components/HomeView/HeroSection/HomeViewHero.vue";

</script>

<style scoped lang="scss">
.container {
    min-height: calc(100vh - $navbar-height-desktop);
}
</style>