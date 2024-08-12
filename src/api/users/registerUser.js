import axios from "axios";
import Notiflix from "notiflix";
import endpoints from "../../constants/apiEndpoints.js";

const registerUser = async (userData) => {
  const url = endpoints.USER_REGISTER;
  console.log(`Sending request to URL: ${url}`);
  try {
    const response = await axios.post(url, userData);
    Notiflix.Notify.success(`User ${userData.name} registered successfully.`);

    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    console.error("Error:", error);

    if (error.response && error.response.status === 409) {
      Notiflix.Notify.failure("User already exists with this email.");
    } else {
      Notiflix.Notify.failure("An error occurred. Please try again later.");
    }

    return null;
  }
};

export default registerUser;
