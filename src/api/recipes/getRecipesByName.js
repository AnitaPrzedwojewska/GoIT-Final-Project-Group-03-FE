import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const getRecipesByName = async (name) => {
  const url = endpoints.RECIPE_BY_NAME;

  try {
    const response = await axios.get(url, name);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getRecipesByName;
