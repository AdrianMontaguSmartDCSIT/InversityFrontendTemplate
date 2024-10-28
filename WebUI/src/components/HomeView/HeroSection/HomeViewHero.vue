<template>
    <v-row>
        <v-col cols="12" md="6" class="d-flex flex-column justify-center">
            <HomeViewHeroMain />
        </v-col>
        <v-col cols="12" md="6" class="d-flex-col align-center">
            <HomeViewHeroWindow />
        </v-col>
    </v-row>
    <v-row class="py-5">
        <v-col cols="12" class="d-flex-col text-center d-md-flex justify-center align-center">
            <HomeViewHeroStats />
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" class="d-flex justify-center">
            <HomeViewHeroSocialProof />
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import HomeViewHeroWindow from './HomeViewHeroWindow.vue';
import HomeViewHeroMain from './HomeViewHeroMain.vue';
import HomeViewHeroStats from './HomeViewHeroStats.vue';
import HeroViewSubText from './HomeViewHeroSubText.vue';
import HomeViewHeroSocialProof from './HomeViewHeroSocialProof.vue';


</script>

<style scoped lang="scss"></style>