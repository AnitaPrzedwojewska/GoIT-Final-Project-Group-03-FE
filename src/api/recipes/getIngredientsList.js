import axios from "axios";

// import apiUrl from "../../services/api.js";
import { apiUrl } from "../../constants/apiUrl.js";
import { endpoints } from "../../constants/apiEndpoints.js";

const getIngredientsList = async () => {
  const url = new URL(`${apiUrl}${endpoints.INGREDIENTS_LIST}`);

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getIngredientsList;
