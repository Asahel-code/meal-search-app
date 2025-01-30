import { queryClient } from "../queryClient";
import apiCallServices from "../services/apiCallServices";

export async function searchMeals({ commit }, keyword) {
    commit("setLoading", true);
    commit("setError", null);

    try {
        const data = await queryClient.fetchQuery({
            queryKey: ["search", keyword],
            queryFn: async () => await apiCallServices.searchMeals(keyword, null),
        });

        commit("setSearchedMeals", data.meals || []);
    } catch (error) {
        commit("setError", error.message);
    } finally {
        commit("setLoading", false);
    }
}

export async function searchMealsByLetter({ commit }, letter) {
    commit("setLoading", true);
    commit("setError", null);

    try {
        const data = await queryClient.fetchQuery({
            queryKey: ["search", letter],
            queryFn: async () => await apiCallServices.searchMeals(null, letter),
        });

        commit("setMealsByLetter", data.meals || []);
    } catch (error) {
        commit("setError", error.message);
    } finally {
        commit("setLoading", false);
    }
}

export async function searchMealsByIngredient({ commit }, ingredient) {
    commit("setLoading", true);
    commit("setError", null);

    try {
        const data = await queryClient.fetchQuery({
            queryKey: ["filter", ingredient],
            queryFn: async () => await apiCallServices.filterMeals(ingredient),
        });

        commit("setMealsByIngredient", data.meals || []);
    } catch (error) {
        commit("setError", error.message);
    } finally {
        commit("setLoading", false);
    }
}