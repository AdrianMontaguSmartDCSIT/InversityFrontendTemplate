<template>
    <v-row justify="center" align="center">
        <v-window v-model="challenges" show-arrows="true" class="challenge-window">
            <v-window-item v-for="(image, index) in images" :key="index">
                <v-card class="d-flex align-center justify-center" elevation="2">
                    <v-img :src="image" width="750">
                        <div v-if="challenges === 1" style="position: absolute; top: 10px; right: 10px; z-index: 100;"
                            class="d-flex align-center">
                            <v-icon class="live-badge">
                                mdi-circle
                            </v-icon>
                            <p class="live-badge px-2"><strong>LIVE</strong></p>
                        </div>
                    </v-img>
                </v-card>
            </v-window-item>
        </v-window>
    </v-row>
    <!-- <v-row justify="center">
        <v-col cols="4">
            <v-btn @click="showPrevious" color="primary" class="slider-button">Previous</v-btn>
        </v-col>
        <v-col cols="4">
            <v-btn @click="showNext" color="primary" class="slider-button">Next</v-btn>
        </v-col>
    </v-row> -->
</template>


<script setup lang="ts">
import { ref } from 'vue';
import ftPhoto from '@/assets/images/challenge_financial_times.webp';
import hackathonPhoto from '@/assets/images/challenge_hackathon.webp';
import nestaPhoto from '@/assets/images/challenge_nesta.webp';

const challenges = ref(1);
const images = [nestaPhoto, ftPhoto, hackathonPhoto];

// const showPrevious = () => {
//     if (challenges.value > 0) {
//         challenges.value--
//     }
// };

// const showNext = () => {
//     if (challenges.value < images.length - 1) {
//         challenges.value++
//     }
// };


</script>

<style scoped lang="scss">
.slider-button {
    width: 100%;
}
.live-badge {
    color: #2dc312;
    font-size: 1.5rem;
}
.challenge-window {
    border: 12px solid $theme-primary;
    border-radius: 5px;
}
</style>