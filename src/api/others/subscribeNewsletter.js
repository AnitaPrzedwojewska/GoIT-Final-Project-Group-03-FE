import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const subscribeNewsletter = async (email) => {
  const url = endpoints.OTHER_SUBSCRIBE;

  try {
    const response = await axios.post(url, email);
    console.log('subscribeNewsletter - response: ', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default subscribeNewsletter;
