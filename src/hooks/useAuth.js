import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../redux/auth/auth.selectors.js";

const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return {
    user,
    isLoggedIn
  };
};

export default useAuth;
