import axios from "axios";

// import apiUrl from "../../services/api.js";
import { apiUrl } from "../../constants/apiUrl.js";
import { endpoints } from "../../constants/apiEndpoints.js";

const getRecipesByName = async (name) => {
  const url = new URL(`${apiUrl}${endpoints.RECIPE_BY_NAME}`);
  const options = {
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await axios.get(url, name, options);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getRecipesByName;
