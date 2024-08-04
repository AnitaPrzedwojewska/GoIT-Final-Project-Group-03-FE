import axios from "axios";

import apiUrl from "../../services/api.js";

export const deleteMyRecipe = async (recipeId) => {
  const endpointUrl = "/ownRecipes";

  const url = new URL(`${apiUrl}${endpointUrl}/${recipeId}`);

  try {
    const response = await axios.delete(url, recipeId);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
