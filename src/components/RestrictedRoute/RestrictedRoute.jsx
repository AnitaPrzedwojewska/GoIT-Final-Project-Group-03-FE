import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import PropTypes from "prop-types";

import routes from "../../constants/routes";

const RestrictedRoute = ({ redirectTo = `/${routes.MAIN}` }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Outlet />;
};

RestrictedRoute.propTypes = {
  redirectTo: PropTypes.string,
};

export default RestrictedRoute;
