import { useSelector } from "react-redux";
import {
  selectIsLoggedIn
} from "../redux/auth/auth.selectors.js";

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return {
    isLoggedIn
  };
};

export default useAuth;
