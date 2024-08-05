// import { Navigate, Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import PropTypes from 'prop-types';

// const PrivateRoute = () => {
const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const needLogIn = !isLoggedIn && !isRefreshing;

  // return needLogIn ? <Navigate to='/welcome' /> : <Outlet />;
  return needLogIn ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;