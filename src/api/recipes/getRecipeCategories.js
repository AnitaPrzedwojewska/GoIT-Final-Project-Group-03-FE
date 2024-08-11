import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const getRecipeCategories = async () => {
  const url = endpoints.RECIPE_CATEGORIES;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getRecipeCategories;