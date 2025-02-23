<script setup>
import { computed, onMounted } from "vue";
import Meals from "../components/Meals.vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();
const ingredient = computed(() => store.state.ingredient);
const loading = computed(() => store.state.loading);
const error = computed(() => store.state.error);
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>

<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ ingredient.strIngredient }}</h1>
  </div>
  <div v-if="loading">Loading...</div>
	<div v-else-if="error" class="text-red-500">Error: {{ error }}</div>
  <Meals v-else :meals="meals" />
</template>
