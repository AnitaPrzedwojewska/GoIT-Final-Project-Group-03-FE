import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const getUser = async (userId) => {
  const token = localStorage.getItem("token"); // lub z store Redux

  if (!token) {
    throw new Error("Unauthorized");
  }

  const url = endpoints.USER_CURRENT;

  try {
    const response = await axios.get(url, userId);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getUser;
