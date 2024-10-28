<template>
    <div class="align-center">
        <h1 class="hero-text">Build Future Leaders with Practical AI Skills</h1>
    </div>
    <div>
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
        font-size: 1.5rem;
        line-height: 1.2;
    }
}
</style>