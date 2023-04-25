<script setup>
import YouTubeButton from "./YouTubeButton.vue";
import { truncateWords } from "../filters";

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>

<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>

    <div class="p-3 flex flex-col gap-2">
      <div class="text-center">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
          <h3 class="font-semibold md:text-lg">{{ meal.strMeal }}</h3>
        </router-link>
      </div>
      <p class="mb-4">
        {{ truncateWords(meal.strInstructions, 20) }}
      </p>

      <div class="flex justify-between items-center">
        <YouTubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>
