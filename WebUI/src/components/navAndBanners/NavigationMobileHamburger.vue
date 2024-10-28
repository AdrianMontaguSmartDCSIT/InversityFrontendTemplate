<template v-slot:prepend>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer v-model="drawer" location="right" temporary>
        <v-list-subheader class="d-flex justify-end">
            <v-icon icon="mdi-close" size="large" @click="drawer = !drawer"></v-icon>
        </v-list-subheader>
        <v-list :items="items"></v-list>
        <template v-slot:append>
            <div class="pa-5">
                <v-btn block color="secondary">
                    Login
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)

const items = ref([
    { title: "Our Offers", value: "Baz1" },
    { title: "About Us", value: "Baz2" },
    { title: "Another Thing", value: "Baz" },
])

</script>

<style scoped></style>