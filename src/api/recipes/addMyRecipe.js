import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const addMyRecipe = async (formData) => {
  const url = `${endpoints.MY_RECIPES_ADD}`;

  try {
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in addMyRecipe API call:", error);
    throw error;
  }
};

export default addMyRecipe;
