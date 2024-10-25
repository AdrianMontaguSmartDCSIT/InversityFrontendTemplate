<template>
    <div class="align-center">
        <h1 class="hero-text">Equip Your Students for the AI-Powered Future</h1>
        <p class="py-4">Our hands-on AI Masterclass and real-world challenges empower students with essential,
            future-ready
            skills to tackle tomorrow's biggest opportunities.</p>
    </div>
    <div class="py-4 d-flex">
        <v-btn color="primary">Book A Demo</v-btn>
        <v-btn color="secondary" class="d-none d-md-block mx-2">Join Us</v-btn>
    </div>
    <div>
        Trusted by:
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@media screen and (min-width: $breakpoint-lg) {
    .hero-text {
        font-size: 3.5rem;
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