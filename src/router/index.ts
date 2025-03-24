import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MealDetails from '../views/MealDetails.vue';
import FavouritesView from '../views/FavouritesView.vue';
import Ingredients from '../views/Ingredients.vue';
import MealsByIngredient from '../views/MealsByIngredient.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/my-favourite',
      name: 'my-favourite',
      component: FavouritesView
    },
    {
      path: '/meal/:id',
      name: 'meal-details',
      component: MealDetails
    },
    {
      path: '/ingredients',
      name: 'ingredients',
      component: Ingredients
    },
    {
      path: '/meals-by-ingredient/:i',
      name: 'meals-by-ingredient',
      component: MealsByIngredient
    },
  ]
});

export default router;