<script setup lang="ts">
import {computed, ref} from 'vue';
import {mealApi} from '../api/mealApiServices';
import {useQuery} from '@tanstack/vue-query';
import type { Ingredient } from '../types/meal';
import IngredientCard from '../components/IngredientCard.vue';
import SearchBar from '../components/SearchBar.vue';
import IngredientLoader from '../components/IngredientLoader.vue';

const searchQuery = ref<string>('');

const {
	data: ingredientsData,
	isLoading,
	error,
} = useQuery({
	queryKey: ['ingredients'],
	queryFn: mealApi.getIngredients,
});

const computedIngredients = computed<Ingredient[]>(() => {
	if (ingredientsData?.value?.meals && searchQuery.value) {
		return ingredientsData.value.meals.filter((ingredient: Ingredient) =>
			ingredient.strIngredient
				.toLowerCase()
				.includes(searchQuery.value.toLowerCase()),
		);
	}
	return ingredientsData?.value?.meals || [];
});

</script>

<template>
	<div class="p-8">
		<h1 class="text-4xl font-bold mb-4 text-primary">Ingredients</h1>

		<SearchBar placeholder="Search for an Ingridient" v-model="searchQuery" />

		<div
			v-if="isLoading"
			class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-5 gap-5 mt-3">
			<IngredientLoader v-for="index in 24" :key="index" />
		</div>
		<div v-else-if="error" class="text-red-500">Error: {{ error.message }}</div>
		<div
			v-else
			class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-5 gap-5 mt-3">
			<IngredientCard v-for="ingredient in computedIngredients" :key="ingredient.idIngredient" :ingredient="ingredient" />
		</div>
	</div>
</template>
