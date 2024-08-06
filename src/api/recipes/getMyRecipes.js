import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const getMyRecipes = async (page = 1, limit = 4) => {
  const url = `${endpoints.MY_RECIPES_GET}?page=${page}&limit=${limit}`;

  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getMyRecipes;
