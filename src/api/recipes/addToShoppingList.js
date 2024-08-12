import axios from "axios";
import endpoints from "../../constants/apiEndpoints.js";

const addToShoppingList = async ({ ingredientId, measure }) => {
  const url = `${endpoints.SHOPPING_LIST}`;

  try {
    const response = await axios.post(url, { ingredientId, measure });
    return response.data;
  } catch (error) {
    console.error("Error adding to shopping list:", error);
    return { error: error.message };
  }
};

export default addToShoppingList;
