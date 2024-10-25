<template>
    <v-row align="center">
        <v-carousel v-model="challenges" show-arrows-on-hover hide-delimiters>
            <v-carousel-item v-for="(image, index) in images" :key="index">
                <v-card class="d-flex align-center h-100" color="white">
                    <v-img :src="image" class="carousel-image" cover>
                        <div v-if="challenges === 1" style="position: absolute; top: 10px; right: 10px; z-index: 10;"
                            class="d-flex align-center">
                            <v-icon class="live-badge">
                                mdi-circle
                            </v-icon>
                            <p class="live-badge px-2"><strong>LIVE</strong></p>
                        </div>
                    </v-img>
                </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-row>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import ftPhoto from '@/assets/images/challenge_financial_times.webp';
import hackathonPhoto from '@/assets/images/challenge_hackathon.webp';
import nestaPhoto from '@/assets/images/challenge_nesta.webp';

const challenges = ref(1);
const images = [nestaPhoto, ftPhoto, hackathonPhoto];

</script>

<style scoped lang="scss">
.live-badge {
    color: #f41919;
    font-size: 1.5rem;
}

.carousel-image {
    border: 12px solid $theme-primary;
    height: auto;
    width: 100%;
}
</style>