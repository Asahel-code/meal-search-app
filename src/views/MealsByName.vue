<script setup>
import { ref, computed, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name
  if(keyword.value){
    searchMeals()
  }
});
</script>

<template>
  <div class="p-8 pb-0">
    <input
      v-model="keyword"
      type="text"
      class="rounded bourder-2 border-gray-200 w-full"
      placeholder="search for meals"
      @change="searchMeals"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl hover:shadow-xl"
    >
      <router-link to="/">
        <img
          :src="meal.strMealThumb"
          :alt="strMeal"
          class="rounded-t-xl w-full h-48 object-cover"
        />
      </router-link>

      <div class="p-3 flex flex-col gap-2">
        <div class="text-center">
          <router-link to="/">
            <h3 class="font-semibold md:text-lg">{{ meal.strMeal }}</h3>
          </router-link>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>

        <div class="flex justify-between items-center">
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="px-3 py-2 rounded bg-red-500 hover:bg-red-600 text-white transition-colors"
          >
            Youtube
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
