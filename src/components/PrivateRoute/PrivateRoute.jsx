import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import PropTypes from "prop-types";

import routes from '../../constants/routes';

const PrivateRoute = ({ redirectTo = `/${routes.WELCOME}` }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const needLogIn = !isLoggedIn && !isRefreshing;

  return needLogIn ? <Navigate to={redirectTo} /> : <Outlet />;
};

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
};

export default PrivateRoute;
