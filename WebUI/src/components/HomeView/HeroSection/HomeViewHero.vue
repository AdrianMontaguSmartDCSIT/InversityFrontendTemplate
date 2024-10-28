<template>
    <v-row>
        <v-col cols="12" md="6" class="d-flex flex-column justify-center">
            <HomeViewHeroMain />
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column justify-center">
            <HomeViewHeroWindow />
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" class="d-flex justify-center pt-16">
            <HomeViewHeroSocialProof />
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import HomeViewHeroWindow from './HomeViewHeroWindow.vue';
import HomeViewHeroMain from './HomeViewHeroMain.vue';
import HomeViewHeroSocialProof from './HomeViewHeroSocialProof.vue';


</script>

<style scoped lang="scss"></style>