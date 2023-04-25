<script setup>
import { computed, onMounted } from "vue";
import Meals from "../components/Meals.vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();
const ingredient = computed(() => store.state.ingredient);
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>

<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ ingredient.strIngredient }}</h1>
  </div>
  <Meals :meals="meals" />
</template>
