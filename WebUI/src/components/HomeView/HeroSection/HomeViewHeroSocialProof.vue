<template>
    <v-sheet max-width="100%">
        <v-row class="d-flex justify-center">
            <h3>Who we've worked with</h3>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-slide-group show-arrows>
                <v-slide-group-item v-for="(logo, index) in logos" :key="index">
                    <v-card height="100" width="200" elevation="0" class="px-3">
                        <v-img :src="logo" class="fill-height">
                        </v-img>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
        </v-row>
    </v-sheet>
</template>

<script setup lang="ts">
import { BellingcatLogo, CrownEstateLogo, FacultyLogo, HSFCLogo, KE6SLogo, MercedesLogo } from '@/assets';

const logos = [
    BellingcatLogo,
    CrownEstateLogo,
    FacultyLogo,
    HSFCLogo,
    KE6SLogo,
    MercedesLogo
];
</script>


<style scoped lang="scss">
@media screen and (max-width: $breakpoint-lg) {
    .v-card {
        width: 150px !important;
        height: 75px !important;
    }
}

@media screen and (max-width: $breakpoint-md) {
    .v-card {
        width: 150px !important;
        margin: 5px !important;
        border-radius: 0px;
    }
}
</style>
