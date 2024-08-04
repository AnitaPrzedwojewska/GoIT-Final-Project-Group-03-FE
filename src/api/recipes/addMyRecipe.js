import axios from "axios";

import apiUrl from "../../services/api.js";

export const addMyRecipe = async (recipeData) => {
  const endpointUrl = "/ownRecipes/add";

  const url = new URL(`${apiUrl}${endpointUrl}`);
  const options = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  try {
    const response = await axios.post(url, recipeData, options);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
