<template>
    <div class="align-center">
        <h1 class="hero-text">Equip Your Students for the AI-Powered Future</h1>
    </div>
    <div class="d-none d-md-block">
        <HeroViewSubText />
    </div>
</template>

<script setup lang="ts">
import HeroViewSubText from './HomeViewHeroSubText.vue';

</script>

<style scoped lang="scss">
@media screen and (min-width: $breakpoint-lg) {
    .hero-text {
        font-size: 3rem;
        line-height: 1.2;
    }
}


@media screen and (max-width: $breakpoint-md) {
    .hero-text {
        font-size: 2.5rem;
        line-height: 1.2;
    }
}
</style>