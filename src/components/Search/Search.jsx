import { NavLink } from "react-router-dom";

import FancyButton from "../BtnFancy/BtnFancy";

import css from "./Search.module.css";
import PropTypes from "prop-types";

const Search = ({ children, onSubmit }) => {
  return (
    <>
      <div>Search</div>
      <div>{children}</div>
      <form onSubmit={onSubmit}>
        <div className={css.fancyInput}>
          <input
            className={css.input}
            id="mainInput"
            type="text"
            placeholder="Enter the text"
          />
          <FancyButton className={css.blackButton}>Submit</FancyButton>
        </div>
      </form>
      <NavLink to="/search">Search</NavLink>
    </>
  );
};

Search.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};

export default Search;
