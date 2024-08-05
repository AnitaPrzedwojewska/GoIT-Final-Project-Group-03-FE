import axios from "axios";

// import apiUrl from "../../services/api.js";
import { apiUrl } from "../../constants/apiUrl.js";
import { endpoints } from "../../constants/apiEndpoints.js";

const registerUser = async (userData) => {

  const url = new URL(`${apiUrl}${endpoints.USER_REGISTER}`);
  const options = {
    headers: { "Content-Type": "application/json" },
  };

  try {
    console.log('apiUrl: ', String(url));
    console.log('userData: ', userData);
    const response = await axios.post(url, userData, options);
    console.log('response: ', response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default registerUser;