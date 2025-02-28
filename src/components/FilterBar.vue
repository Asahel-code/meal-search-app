<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { mealApi } from '../api/mealApi';
import type { Category, Area } from '../types/meal';

const emit = defineEmits<{
  (e: 'filterByCategory', category: string): void;
  (e: 'filterByArea', area: string): void;
  (e: 'random'): void;
}>();

const categories = ref<Category[]>([]);
const areas = ref<Area[]>([]);
const selectedCategory = ref('');
const selectedArea = ref('');

onMounted(async () => {
  try {
    const [categoriesResponse, areasResponse] = await Promise.all([
      mealApi.getCategories(),
      mealApi.getAreas()
    ]);
    categories.value = categoriesResponse.categories;
    areas.value = areasResponse.meals;
  } catch (error) {
    console.error('Failed to fetch filters:', error);
  }
});

const handleCategoryChange = (category: string) => {
  selectedCategory.value = category;
  selectedArea.value = '';
  emit('filterByCategory', category);
};

const handleAreaChange = (area: string) => {
  selectedArea.value = area;
  selectedCategory.value = '';
  emit('filterByArea', area);
};
</script>

<template>
  <div class="flex flex-wrap gap-4 mb-8">
    <div class="flex-1 min-w-[200px]">
      <select
        v-model="selectedCategory"
        @change="handleCategoryChange(selectedCategory)"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Categories</option>
        <option
          v-for="category in categories"
          :key="category.idCategory"
          :value="category.strCategory"
        >
          {{ category.strCategory }}
        </option>
      </select>
    </div>

    <div class="flex-1 min-w-[200px]">
      <select
        v-model="selectedArea"
        @change="handleAreaChange(selectedArea)"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Areas</option>
        <option
          v-for="area in areas"
          :key="area.strArea"
          :value="area.strArea"
        >
          {{ area.strArea }}
        </option>
      </select>
    </div>

    <button
      @click="emit('random')"
      class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
    >
      Random Meal
    </button>
  </div>
</template>