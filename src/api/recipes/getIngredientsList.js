import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const getIngredientsList = async () => {
  const url = endpoints.INGREDIENTS_LIST;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getIngredientsList;
