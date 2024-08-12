import axios from "axios";
import endpoints from "../../constants/apiEndpoints.js";

const registerUser = async (userData) => {
  const url = endpoints.USER_REGISTER;
  console.log(`Sending request to URL: ${url}`);
  try {
    const response = await axios.post(url, userData);
    console.log(`User ${userData.name} registered successfully.`);

    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    console.log("Error:", error);

    return null;
  }
};

export default registerUser;
