<template>
    <div>
        <v-menu :location="menuLocation">
            <template v-slot:activator="{ props }">
                <p v-bind="props" class="dropdown-text">
                    Our Offers
                </p>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in filteredDropdownLinks" :key="index" class="dropdown-item">
                    <v-list-item-title>
                        <router-link :to="item.link" class="no-link-style">{{ item.title }}</router-link>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router'

const dropdownLinks = ref([
    { title: 'For Educators', link: '/educators', home: true },
    { title: 'For Individuals', link: '/individuals', home: false },
    { title: 'For Corporate', link: '/corporate', home: false },
]);

const menuLocation = "bottom";

// dynamic path update
const route = useRoute();
const currentPath = computed(() => route.path);

const filteredDropdownLinks = computed(() => {
    return dropdownLinks.value.filter((link) => {
        if (currentPath.value === '/') {
            return !link.home;
        } else {
            return link.link != currentPath.value;
        }
    });
});

</script>

<style scoped>
.dropdown-text {
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
}

.dropdown-item {
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
}

.no-link-style {
    text-decoration: none;
    color: inherit;
    text-shadow: none;
}
</style>