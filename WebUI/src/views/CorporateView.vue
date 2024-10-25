<template>
    <v-container>
        <v-sheet class="d-flex align-center justify-center sheet-container">
            <v-carousel height="400">
                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>
                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>
                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
            </v-carousel>
        </v-sheet>
    </v-container>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.sheet-container {
    height: calc(100vh - $navbar-height-desktop);
}

.v-carousel {
    max-width: 600px;
}
</style>
