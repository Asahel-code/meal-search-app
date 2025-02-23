<script setup>
import { useQuery } from "@tanstack/vue-query";
import Meals from "../components/Meals.vue";
import apiCallServices from "../services/apiCallServices";

const { data: meals, isLoading, error } = useQuery({
  queryKey: ["random"],
  queryFn: apiCallServices.getRandomMeals,
});

</script>

<template>
  <div></div>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Random Meals</h1>
  </div>

  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error" class="text-red-500">Error: {{ error.message }}</div>
  <Meals v-else :meals="meals" />
</template>
