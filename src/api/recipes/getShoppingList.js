import axios from "axios";
import endpoints from "../../constants/apiEndpoints.js";

const getShoppingList = async () => {
  const url = `${endpoints.SHOPPING_LIST}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error gettin shopping list:", error);
    return { error: error.message };
  }
};

export default getShoppingList;
