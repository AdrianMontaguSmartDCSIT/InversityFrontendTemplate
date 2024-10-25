<template>
    <v-container class="px-14 px-m-2 container" style="border: 1px solid red;">
        <HomeViewHero />
    </v-container>
</template>

<script setup lang="ts">
import HomeViewHero from "@/components/HomeView/HomeViewHero.vue";

</script>

<style scoped lang="scss">
.container {
    height: calc(100vh - $navbar-height-desktop);
}
</style>