import { NavLink } from 'react-router-dom';
// import css from "./Navigation.module.css";
import PropTypes from "prop-types";

const Navigation = ({ children }) => {
  return (
    <>
      <div>Navigation</div>
      <div>
        <NavLink to='/categories/:categoryName'>Categories</NavLink>
        <NavLink to='/add'>Add recipes</NavLink>
        <NavLink to='/my'>My recipes</NavLink>
        <NavLink to='/favorite'>Favorites</NavLink>
        <NavLink to='/shopping-list'>Shopping list</NavLink>
        <NavLink to='/search'>Search</NavLink>
      </div>
      <div>{children}</div>
    </>
  );
};

Navigation.propTypes = {
  children: PropTypes.node,
};

export default Navigation;
