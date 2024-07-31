import { NavLink} from 'react-router-dom'

// import css from "./Nav.module.css";
import PropTypes from "prop-types";

const Nav = ({ children }) => {
  return (
    <>
      <div>Nav</div>
      <div>
        <NavLink to='/add'>Add recipes</NavLink>
        <NavLink to='/search'>Search</NavLink>
        <NavLink to='/my'>My recipes</NavLink>
        <NavLink to='/favorite'>Favorites</NavLink>
        <NavLink to='/shopping-list'>Shopping list</NavLink>
      </div>
      <div>{children}</div>
    </>
  );
};

Nav.propTypes = {
  children: PropTypes.node,
};

export default Nav;
