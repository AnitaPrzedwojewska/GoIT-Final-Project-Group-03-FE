import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const getMainPageRecipes = async (page = 1, limit = 4) => {
  const url = `${endpoints.RECIPES_MAIN_PAGE}?page=${page}&limit=${limit}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getMainPageRecipes;
