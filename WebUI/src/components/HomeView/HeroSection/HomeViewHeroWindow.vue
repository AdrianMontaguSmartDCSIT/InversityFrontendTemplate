<template>
    <v-carousel v-model="getChallenge" height="auto" :show-arrows="false" :continuous="false" hide-delimiters>
        <v-carousel-item v-for="(image, i) in images" :key="i">
            <v-sheet height="100%">
                <div class="d-flex fill-height justify-center align-center">
                    <v-img :src="image" class="carousel-image">
                    </v-img>
                </div>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
    <div class="d-flex justify-center">
        <v-tabs v-model="tab" color="secondary">
            <v-tab value="one" :stacked="true">
                <div class="d-flex flex-column align-center">
                    <span>Previous</span>
                    <span>Challenge</span>
                </div>
            </v-tab>
            <v-tab value="two">
                <div class="d-flex flex-column align-center">
                    <span>Current</span>
                    <span>Challenge</span>
                </div>
            </v-tab>
            <v-tab value="three">
                <div class="d-flex flex-column align-center">
                    <span>Next</span>
                    <span>Challenge</span>
                </div>
            </v-tab>
        </v-tabs>
    </div>
</template>


<script setup lang="ts">
import { ref, computed, Ref } from 'vue';
import ftPhoto from '@/assets/images/challenge_financial_times.webp';
import hackathonPhoto from '@/assets/images/challenge_hackathon.webp';
import nestaPhoto from '@/assets/images/challenge_nesta.webp';

// const challenges = ref(1);
const images = [nestaPhoto, ftPhoto, hackathonPhoto];

const tab: Ref<'one' | 'two' | 'three'> = ref("two")

const getChallenge = computed(() => {
    const tabMapping = {
        "one": 0,
        "two": 1,
        "three": 2
    };
    return tabMapping[tab.value];
});

</script>

<style scoped lang="scss">
.live-badge {
    color: #f41919;
    font-size: 1.5rem;
}

.card-item {
    background-color: $theme-background;
    border-radius: 0;
}

.carousel-image {
    border: 12px solid $theme-primary;
    // height: auto;
    // width: 100%;
}
</style>