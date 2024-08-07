import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const subscribeNewsletter = async (email) => {
  const url = endpoints.USER_SUBSCRIBE;

  try {
    const response = await axios.patch(url, email);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default subscribeNewsletter;
