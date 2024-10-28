<template>
    <v-row class="pt-3">
        <v-col cols=12>
            <p>Our hands-on AI Masterclass and real-world challenges empower students with essential,
                future-ready
                skills to tackle tomorrow's biggest opportunities.</p>
        </v-col>
    </v-row>
    <v-row class="d-none d-md-block py-1 py-md-5 d-md-flex flex-md-column">
        <HomeViewHeroStats />
    </v-row>
    <v-row class="d-flex justify-center">
        <v-col cols="11" md="6" class="d-flex justify-center">
            <v-btn color="primary" block>Book A Demo</v-btn>
        </v-col>
        <v-col cols="11" md="6" class="d-flex justify-center">
            <v-btn color="secondary" block variant="outlined">Join Us</v-btn>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import HomeViewHeroStats from './HomeViewHeroStats.vue';

</script>

<style scoped></style>