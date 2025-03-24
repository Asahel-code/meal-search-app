export interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  [key: string]: string;
}

export interface Category {
  strCategory: string;
}

export interface Area {
  strArea: string;
}

export interface Ingredient {
  idIngredient: string;
  strIngredient: string;
  strDescription?: string;
  strType?: string;
}

export interface MealResponse {
  meals: Meal[];
}

export interface CategoryResponse {
  meals: Category[];
}

export interface AreaResponse {
  meals: Area[];
}

export interface IngredientResponse {
  meals: Ingredient[];
}