<template>
    <v-row align-content="center" class="h-100">
        <v-col cols="12" md="6" class="d-flex flex-column justify-center">
            <HomeViewHeroMain/>
        </v-col>
        <v-col cols="12" md="6" class="d-none d-md-block d-md-flex-row">
            <HomeViewHeroWindow/>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import HomeViewHeroWindow from './HomeViewHeroWindow.vue';
import HomeViewHeroMain from './HomeViewHeroMain.vue';


</script>

<style scoped lang="scss">
</style>