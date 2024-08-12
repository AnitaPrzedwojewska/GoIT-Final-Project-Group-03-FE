import axios from "axios";
import endpoints from "../../constants/apiEndpoints.js";

const deleteFromShoppingList = async (ingredientsId) => {
  const url = `${endpoints.SHOPPING_LIST}`;

  try {
    const response = await axios.delete(url, { ingredientsId });
    return response.data;
  } catch (error) {
    console.error("Error delete from shopping list:", error);
    return { error: error.message };
  }
};

export default deleteFromShoppingList;
