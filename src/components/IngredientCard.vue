<script setup lang="ts">
import type { Ingredient } from '../types/meal';

const props = defineProps<{
  ingredient: Ingredient;
}>();
</script>

<template>
	<router-link
		:to="{ name: 'meals-by-ingredient', params: { i: props.ingredient.strIngredient } }"
		class="block bg-slate-500 rounded p-3 shadow">
		<h3 class="md:text-xl sm:text-lg text-base font-bold mb-2">
			{{ props.ingredient.strIngredient }}
		</h3>
	</router-link>
</template>
