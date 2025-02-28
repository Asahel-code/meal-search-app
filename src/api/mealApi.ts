import axios from 'axios';
import type { MealResponse, CategoryResponse, AreaResponse } from '../types/meal';

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const mealApi = {
  async searchMeals(query: string) {
    const response = await axios.get<MealResponse>(`${API_BASE_URL}/search.php?s=${query}`);
    return response.data;
  },

  async getMealById(id: string) {
    const response = await axios.get<MealResponse>(`${API_BASE_URL}/lookup.php?i=${id}`);
    return response.data;
  },

  async getCategories() {
    const response = await axios.get<CategoryResponse>(`${API_BASE_URL}/categories.php`);
    return response.data;
  },

  async getMealsByCategory(category: string) {
    const response = await axios.get<MealResponse>(`${API_BASE_URL}/filter.php?c=${category}`);
    return response.data;
  },

  async getAreas() {
    const response = await axios.get<AreaResponse>(`${API_BASE_URL}/list.php?a=list`);
    return response.data;
  },

  async getMealsByArea(area: string) {
    const response = await axios.get<MealResponse>(`${API_BASE_URL}/filter.php?a=${area}`);
    return response.data;
  },

  async getRandomMeal() {
    const response = await axios.get<MealResponse>(`${API_BASE_URL}/random.php`);
    return response.data;
  },

  async searchByLetter(letter: string) {
    const response = await axios.get<MealResponse>(`${API_BASE_URL}/search.php?f=${letter}`);
    return response.data;
  }
};