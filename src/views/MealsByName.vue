<script setup>
import {ref, computed, onMounted, watch} from 'vue';
import store from '../store';
import {useRoute} from 'vue-router';
import Meals from '../components/Meals.vue';

const route = useRoute();
const keyword = ref('');
const loading = computed(() => store.state.loading);
const error = computed(() => store.state.error);
const meals = computed(() => store.state.searchedMeals);

// Function to search meals based on the keyword
function searchMeals() {
	if (keyword.value) {
		store.dispatch('searchMeals', keyword.value);
	} else {
		store.commit('setSearchedMeals', []);
	}
}

watch(keyword, () => {
	searchMeals();
});

onMounted(() => {
	keyword.value = route.params.name || '';
	if (keyword.value) {
		searchMeals();
	}
});
</script>

<template>
	<div class="p-8 pb-0">
		<h1 class="text-4xl font-bold mb-4 text-orange-500">Search Meals by Name</h1>
	</div>

  <div class="px-8 pb-3">
		<input
			v-model="keyword"
			type="text"
			class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
			placeholder="search for meals" />
	</div>
  
	<div v-if="loading">Loading...</div>
	<div v-else-if="error" class="text-red-500">Error: {{ error }}</div>

	<Meals v-else :meals="meals" />
</template>
