import axios from "axios";

import apiUrl from "../../services/api.js";

export const deleteMyRecipe = async (page = 1, limit = 4) => {
  const endpointUrl = "/ownRecipes";

  const url = new URL(`${apiUrl}${endpointUrl}?page=${page}&limit=${limit}`);
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
