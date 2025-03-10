<script setup lang="ts">
import {ref, computed, watch} from 'vue';
import {useQuery} from '@tanstack/vue-query';
import {mealApi} from '../api/mealApiServices';
import MealCard from '../components/MealCard.vue';
import SearchBar from '../components/SearchBar.vue';
import MealLoader from '../components/MealLoader.vue';

const searchQuery = ref<string>('');
const debouncedQuery = ref<string>('');

let debounceTimer: ReturnType<typeof setTimeout>;

// Debounce logic: Update `debouncedQuery` only after 500ms of no input changes
watch(searchQuery, newQuery => {
	console.log(searchQuery.value);
	if (debounceTimer) clearTimeout(debounceTimer); // Reset previous timer

	debounceTimer = setTimeout(() => {
		if (debouncedQuery.value !== newQuery) {
			debouncedQuery.value = newQuery.trim();
		}
	}, 500);
});

// Fetch meals using `useQuery`, auto-fetching when `debouncedQuery` updates
const {data, isLoading, isError} = useQuery({
	queryKey: computed(() => ['meals', debouncedQuery.value || 'random']),
	queryFn: async () => mealApi.searchMeals(debouncedQuery.value),
});

// Extract meals from response
const meals = computed(() => {
	if (!data.value) return [];
	return Array.isArray(data.value) ? data.value : data.value.meals || [];
});

// Error handling
const error = computed(() => (isError.value ? 'Failed to fetch meals' : ''));
</script>

<template>
	<div class="min-h-screen bg-[#1a1a1a]">
		<div class="container mx-auto px-4 py-12">
			<div class="flex justify-center items-center gap-x-40 mx-auto md:mb-28 mb-14">
				<div class="">
					<h1 class="md:text-6xl text-5xl font-bold mb-4 leading-tight">
						Make Your
						<span class="text-primary inline md:block">Dream</span>
						<span class="block">Food With Us</span>
					</h1>
					<div class="mt-5">
						<p class="text-xl text-primary font-semibold mb-2">Best Delicious Food</p>
						<p class="text-gray-400">We Have Best Collection's Of Food Recipes</p>
					</div>
				</div>
				<div class="h-80 hidden md:block relative">
					<img
						src="../assets/images/caption-img.png"
						class="h-full w-full"
						alt="caption" />
					<img
						src="../assets/svg/pointer.svg"
						class="absolute right-0 bottom-[-1] h-2- w-20"
						alt="caption" />
				</div>
			</div>

			<SearchBar v-model="searchQuery" />

			<div class="mb-12">
				<h2 class="text-3xl font-bold text-center mb-8">
					{{ searchQuery ? 'Search Results' : "Today's Selection" }}
				</h2>
			</div>

			<div
				v-if="isLoading"
				class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				<MealLoader v-for="index in 12" :key="index"/>
			</div>

			<div v-else-if="error" class="text-center text-red-500">
				{{ error }}
			</div>

			<div v-else-if="meals.length === 0" class="text-center">
				<p class="text-lg">No meals found</p>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				<MealCard v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
			</div>
		</div>
	</div>
</template>
