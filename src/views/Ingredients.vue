<script setup>
import store from '../store';
import {computed, ref} from 'vue';
import {useRouter} from 'vue-router';
import apiCallServices from '../api/mealApiServices';
import {useQuery} from '@tanstack/vue-query';

const router = useRouter();
const keyword = ref('');

const {
	data: ingredientsData,
	isLoading,
	error,
} = useQuery({
	queryKey: ['ingredients'],
	queryFn: apiCallServices.getIngredients,
});

const computedIngredients = computed(() => {
	if (keyword.value) {
		return ingredientsData.value.meals.filter(ingredient =>
			ingredient.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()),
		);
	}
	return ingredientsData.value.meals;
});

function openIngredient(ingredient) {
	store.commit('setIngredient', ingredient);
	router.push({
		name: 'byIngredient',
		params: {ingredient: ingredient.strIngredient},
	});
}
</script>

<template>
	<div class="p-8">
		<h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>

		<div v-if="isLoading">Loading...</div>
		<div v-else-if="error" class="text-red-500">Error: {{ error.message }}</div>
		<div v-else>
			<input
				v-model="keyword"
				type="text"
				class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
				placeholder="search for Ingredrients" />

			<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
				<a
					href="#"
					@click.prevent="openIngredient(ingredient)"
					v-for="ingredient of computedIngredients"
					:key="ingredient.idIngredient"
					class="block bg-white rounded p-3 mb-3 shadow">
					<h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
				</a>
			</div>
		</div>
	</div>
</template>
