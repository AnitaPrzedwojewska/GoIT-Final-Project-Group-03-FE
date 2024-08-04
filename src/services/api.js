
export const apiUrl = import.meta.env.VITE_API_URL;

import axios from 'axios';

const API_KEY = '';
const BASE_URL = '';

export const fetchCategoryName = async () => {
    const response = await axios.get(`${BASE_URL}recipes/category-list?api_key=${API_KEY}`);
    return response.data.results;
};

export const fetchRecipes = async () => {
    const response = await axios.get(`${BASE_URL}recipes/main-page?api_key=${API_KEY}`);
    return response.data.results; 
}

export const fetchRecipesByCategory = async () => {
    const response = await axios.get(`${BASE_URL}recipes/${recipes.category}?api_key=${API_KEY}`); ///
    return response.data.results;
}

export const fetchRecipesById = async () => {
    const response = await axios.get(`${BASE_URL}recipes/${recipe.id}?api_key=${API_KEY}`); ///
    return response.data.results;
}


