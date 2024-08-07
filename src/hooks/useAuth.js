import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing
} from "../redux/auth/auth.selectors.js";

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    isLoggedIn,
    isRefreshing
  };
};

export default useAuth;
