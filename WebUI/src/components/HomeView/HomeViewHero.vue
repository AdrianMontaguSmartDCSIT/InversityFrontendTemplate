<template>
    <v-row class="h-100">
        <v-col cols="12" md="6" class="d-flex flex-column justify-center">
            <HomeViewHeroMain />
        </v-col>
        <v-col cols="12" md="6">
            <div class="d-none d-sm-block d-md-flex-row">
                <HomeViewHeroWindow />
            </div>
            <div class="d-md-none">
                <HeroViewSubText />
            </div>
        </v-col>
    </v-row>
    <v-row class="py-5">
        <v-col cols="12" class="d-flex-col text-center d-md-flex justify-center align-center">
            <HomeViewHeroStats />
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import HomeViewHeroWindow from './HomeViewHeroWindow.vue';
import HomeViewHeroMain from './HomeViewHeroMain.vue';
import HomeViewHeroStats from './HomeViewHeroStats.vue';
import HeroViewSubText from './HomeViewHeroSubText.vue';


</script>

<style scoped lang="scss"></style>