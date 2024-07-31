import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import PropTypes from "prop-types";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string,
};

export default RestrictedRoute;
