<script setup lang="ts">
import {useQuery} from '@tanstack/vue-query';
import {computed, watch, ref} from 'vue';
import {mealApi} from '../api/mealApiServices';
import type {Meal} from '../types/meal';
import SearchBar from '../components/SearchBar.vue';
import MealCard from '../components/MealCard.vue';
import IngredientLoader from '../components/IngredientLoader.vue';

const searchQuery = ref<string>('');
const selectedCategory = ref<string>('');

const {
	data: categories,
	isLoading: isLoadingCategories,
	error: categoriesError,
} = useQuery({
	queryKey: ['categories'],
	queryFn: mealApi.getCategories,
});

watch(
	() => categories.value?.categories,
	newCategories => {
		if (newCategories && newCategories.length > 0 && !selectedCategory.value) {
			selectedCategory.value = newCategories[0].strCategory;
		}
	},
	{immediate: true},
);

const {data, isLoading, error} = useQuery({
	queryKey: ['by-categories', selectedCategory],
	queryFn: () =>
		mealApi.filterMeals(undefined, selectedCategory.value, undefined),
	enabled: computed(() => !!selectedCategory.value),
});

const computedMeals = computed<Meal[]>(() => {
	if (data?.value?.meals && searchQuery.value) {
		return data.value.meals.filter((meal: Meal) =>
			meal.strMeal.toLowerCase().includes(searchQuery.value.toLowerCase()),
		);
	}
	return data?.value?.meals || [];
});

const handleCategoryClick = (category: string) => {
	selectedCategory.value = category;
};
</script>

<template>
	<div class="p-8">
		<h1 class="text-4xl font-bold mb-4 text-primary">
			Meals for {{ selectedCategory }}
		</h1>

		<div class="flex flex-col md:flex-row gap-x-4">
			<div class="md:w-64 p-4 rounded-lg shadow-md">
				<h2 class="text-xl font-bold mb-4">Categories</h2>
				<div class="flex flex-row flex-wrap md:flex-col gap-2">
					<div v-if="isLoadingCategories">
						<IngredientLoader v-for="index in 14" :key="index" />
					</div>
					<div v-else-if="categoriesError" class="text-red-500">
						Error: {{ categoriesError.message }}
					</div>
					<button
						v-else
						v-for="category in categories?.categories"
						:key="category.idCategory"
						:class="[
							'text-left px-2 md:px-4 py-3 text-sm md:text-base rounded-md transition-all duration-200 hover:bg-primary',
							selectedCategory === category.strCategory ? 'text-white bg-primary' : '',
						]"
						@click="handleCategoryClick(category.strCategory)">
						{{ category.strCategory }}
					</button>
				</div>
			</div>
			<div class="w-full">
				<SearchBar placeholder="Search for a Meal" v-model="searchQuery" />

				<div
					v-if="isLoading"
					class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-3">
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
		</div>
	</div>
</template>
