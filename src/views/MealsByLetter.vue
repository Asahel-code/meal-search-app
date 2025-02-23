<script setup>
import {computed, onMounted, watch} from 'vue';
import store from '../store';
import {useRoute} from 'vue-router';
import Meals from '../components/Meals.vue';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const loading = computed(() => store.state.loading);
const error = computed(() => store.state.error);
const meals = computed(() => store.state.mealsByLetter);

watch(() => route.params.letter, (newLetter) => {
  if (newLetter) {
    store.dispatch('searchMealsByLetter', newLetter);
  } else {
    store.dispatch('searchMealsByLetter', 'A');
  }
});

onMounted(() => {
  const letter = route.params.letter;
  if (letter) {
    store.dispatch('searchMealsByLetter', letter);
  } else {
    store.dispatch('searchMealsByLetter', 'A');
  }
});
</script>

<template>
	<div class="p-8 pb-0">
		<h1 class="text-4xl font-bold mb-4 text-orange-500">
			Search Meals by Letter
		</h1>
	</div>
	<div v-if="loading">Loading...</div>
	<div v-else-if="error" class="text-red-500">Error: {{ error }}</div>
	<div v-else>
		<div class="flex flex-wrap justify-center gap-2 px-8 mb-6">
			<router-link
				:to="{name: 'byLetter', params: {letter}}"
				v-for="letter of letters"
				:key="letter"
				class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">
				{{ letter }}
			</router-link>
		</div>

		<Meals :meals="meals" />
	</div>
</template>
