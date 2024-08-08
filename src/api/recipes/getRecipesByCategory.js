import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const getRecipesByCategory = async (category, page = 1, limit = 4) => {
  const url = `${endpoints.RECIPES_BY_CATEGORY}/${category}?page=${page}&limit=${limit}`;
  console.log("getRecipesByCategory - url: ", url);
  try {
    const response = await axios.get(url, category);
    console.log('getRecipesByCategory - response: ', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getRecipesByCategory;