export function setSearchedMeals(state, meals) {
    state.searchedMeals = meals || []
}

export function setMealsByLetter(state, meals) {
    state.mealsByLetter = meals || []
}

export function setMealsByIngredient(state, meals) {
    state.mealsByIngredient = meals || []
}

export function setIngredient(state, ingredient) {
    state.ingredient = ingredient
}

export function setLoading(state, isLoading) {
    state.loading = isLoading;
}

export function setError(state, error) {
    state.error = error;
}