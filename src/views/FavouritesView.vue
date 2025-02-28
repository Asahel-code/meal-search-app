<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { Meal } from '../types/meal';
import MealCard from '../components/MealCard.vue';
import SearchBar from '../components/SearchBar.vue';
import { useFavorites } from '../composables/useFavorites';

const searchQuery = ref<string>('');
const debouncedQuery = ref<string>('');

const { favorites } = useFavorites();

let debounceTimer: ReturnType<typeof setTimeout>;

// Debounce search input to avoid excessive filtering
watch(searchQuery, (newQuery) => {
  if (debounceTimer) clearTimeout(debounceTimer); 

  debounceTimer = setTimeout(() => {
    debouncedQuery.value = newQuery.trim();
  }, 500);
});

// Filter favorite meals based on search query
const filteredFavorites = computed(() => {
  if (!favorites.value) return [];

  return favorites.value.filter((meal: Meal) =>
    meal.strMeal.toLowerCase().includes(debouncedQuery.value.toLowerCase())
  );
});
</script>

<template>
  <div class="min-h-screen bg-[#1a1a1a]">
    <div class="container mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold text-center mb-8">
        Your Favorite Meals
      </h2>

      <SearchBar v-model="searchQuery" />

      <div v-if="filteredFavorites.length === 0" class="text-center">
        <p class="text-lg">No favorite meals found</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <MealCard v-for="meal in filteredFavorites" :key="meal.idMeal" :meal="meal" />
      </div>
    </div>
  </div>
</template>
