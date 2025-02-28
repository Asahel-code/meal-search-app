import axiosService from './axiosService';
import type {
	Meal,
	MealResponse,
	CategoryResponse,
	AreaResponse,
} from '../types/meal';

// Api calls for meals
export const mealApi = {
	/**
	 * Fetches 12 random meals from the API.
	 * @returns {Promise<Meal[]>} A promise that resolves to an array of random meals.
	 */
	async getRandomMeals(): Promise<Meal[]> {
		const requests = Array.from({length: 12}, async () => {
			const response = await axiosService.get<MealResponse>(`/random.php`);
			return response.data.meals[0];
		});

		return Promise.all(requests);
	},

	/**
	 * Searches meals by a query string or by the first letter.
	 * @param {string} [query] The search query.
	 * @param {string} [letter] The first letter of the meal name.
	 * @returns {Promise<MealResponse>} A promise that resolves to a meal response object.
	 */
	async searchMeals(query?: string, letter?: string): Promise<MealResponse | Meal[]> {
        if (!query && !letter) {
            return this.getRandomMeals();
        }
    
        const endpoint = query
            ? `/search.php?s=${query}`
            : `/search.php?f=${letter}`;
    
        const response = await axiosService.get<MealResponse>(endpoint);
        return response.data;
	},

	/**
	 * Filters meals by ingredient or by a specific category or by specific area.
	 * @param {string} ingredient The ingredient name.
     * * @param {string} category The meal category.
     * * @param {string} area The area name.
	 * @returns {Promise<MealResponse>} A promise that resolves to meals containing the ingredient.
	 */
    async filterMeals(ingredient: string, category?: string, area?: string): Promise<MealResponse> {
        let response;
        if (ingredient) {
			response = await axiosService.get<MealResponse>(`/filter.php?i=${ingredient}`);
		} else if (category) {
			response = await axiosService.get<MealResponse>(`/filter.php?c=${category}`);
		} else if(area) {
			response = await axiosService.get<MealResponse>(`/filter.php?a=${area}`);
        } else {
            response = await axiosService.get<MealResponse>(`/filter.php`);
        }
		return response.data;
	},

	/**
	 * Retrieves a list of all available ingredients.
	 * @returns {Promise<MealResponse>} A promise that resolves to a list of ingredients.
	 */
	async getIngredients(): Promise<MealResponse> {
		const response = await axiosService.get<MealResponse>(`/list.php?i=list`);
		return response.data;
	},

	/**
	 * Fetches details of a specific meal by its ID.
	 * @param {string} id The meal ID.
	 * @returns {Promise<Meal>} A promise that resolves to the meal details.
	 */
	async getMealDetails(id: string): Promise<Meal> {
		const response = await axiosService.get<MealResponse>(`/lookup.php?i=${id}`);
		return response.data.meals[0] || {};
	},

	/**
	 * Retrieves a list of meal categories.
	 * @returns {Promise<CategoryResponse>} A promise that resolves to a list of categories.
	 */
	async getCategories(): Promise<CategoryResponse> {
		const response = await axiosService.get<CategoryResponse>(`/categories.php`);
		return response.data;
	},

	/**
	 * Retrieves a list of all available meal areas (regions).
	 * @returns {Promise<AreaResponse>} A promise that resolves to a list of areas.
	 */
	async getAreas(): Promise<AreaResponse> {
		const response = await axiosService.get<AreaResponse>(`/list.php?a=list`);
		return response.data;
	},
};
