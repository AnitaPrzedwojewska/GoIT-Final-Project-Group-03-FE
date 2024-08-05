import axios from "axios";

// import apiUrl from "../../services/api.js";
import { apiUrl } from "../../constants/apiUrl.js";
import { endpoints } from "../../constants/apiEndpoints.js";

const addMyRecipe = async (recipeData) => {

  const url = new URL(`${apiUrl}${endpoints.MY_RECIPES_ADD}`);
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

export default addMyRecipe;