import {NavLink} from 'react-router-dom'

// import css from "./Search.module.css";
import PropTypes from "prop-types";

const Search = ({ children }) => {
  return (
    <>
      <div>Search</div>
      <div>{children}</div>
      <NavLink to='/search'>Search</NavLink>
    </>
  );
};

Search.propTypes = {
  children: PropTypes.node,
};

export default Search;
