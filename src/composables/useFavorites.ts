import { ref, watch } from 'vue';
import type { Meal } from '../types/meal';

export function useFavorites() {
  const favorites = ref<Meal[]>([]);

  // Load favorites from localStorage on init
  const loadFavorites = () => {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      favorites.value = JSON.parse(saved);
    }
  };

  // Save favorites to localStorage whenever they change
  watch(favorites, (newFavorites) => {
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }, { deep: true });

  const addFavorite = (meal: Meal) => {
    if (!favorites.value.some(f => f.idMeal === meal.idMeal)) {
      favorites.value.push(meal);
    }
  };

  const removeFavorite = (mealId: string) => {
    favorites.value = favorites.value.filter(f => f.idMeal !== mealId);
  };

  const isFavorite = (mealId: string) => {
    return favorites.value.some(f => f.idMeal === mealId);
  };

  // Load favorites on creation
  loadFavorites();

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite
  };
}