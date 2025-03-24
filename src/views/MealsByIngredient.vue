<script setup lang="ts">
import {useQuery} from '@tanstack/vue-query';
import {computed, ref} from 'vue';
import {useRoute} from 'vue-router';
import {mealApi} from '../api/mealApiServices';
import type {Meal} from '../types/meal';
import SearchBar from '../components/SearchBar.vue';
import MealCard from '../components/MealCard.vue';

const searchQuery = ref<string>('');

const route = useRoute();

const {data, isLoading, error} = useQuery({
	queryKey: ['ingredients', route.params.i],
	queryFn: () =>
		mealApi.filterMeals(route.params.i as string, undefined, undefined),
});

const computedMeals = computed<Meal[]>(() => {
	if (data?.value?.meals && searchQuery.value) {
		return data.value.meals.filter((meal: Meal) =>
			meal.strMeal
				.toLowerCase()
				.includes(searchQuery.value.toLowerCase()),
		);
	}
	return data?.value?.meals || [];
});
</script>

<template>
	<div class="p-8">
		<h1 class="text-4xl font-bold mb-4 text-primary">Meals for {{ route.params.i }}</h1>

		<SearchBar placeholder="Search for a Meal" v-model="searchQuery" />

		<div
			v-if="isLoading"
			class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-5 gap-5 mt-3">
			<MealLoader v-for="index in 12" :key="index" />
		</div>
		<div v-else-if="error" class="text-red-500">Error: {{ error.message }}</div>
		<div v-else-if="computedMeals.length === 0" class="text-center">
			<p class="text-lg">No meals found</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
			<MealCard v-for="meal in computedMeals" :key="meal.idMeal" :meal="meal" />
		</div>
	</div>
</template>
