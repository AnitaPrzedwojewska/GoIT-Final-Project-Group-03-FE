import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import PropTypes from "prop-types";

const RestrictedRoute = ({ redirectTo = "/" }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Outlet />;
};

RestrictedRoute.propTypes = {
  redirectTo: PropTypes.string,
};

export default RestrictedRoute;
