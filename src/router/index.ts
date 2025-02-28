import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MealDetails from '../views/MealDetails.vue';
import FavouritesView from '../views/FavouritesView.vue'

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
  ]
});

export default router;