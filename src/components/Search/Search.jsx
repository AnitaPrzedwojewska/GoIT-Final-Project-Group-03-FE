import { NavLink } from "react-router-dom";

import ButonFancy from "../ButonFancy/ButonFancy";

import PropTypes from "prop-types";
import css from "./Search.module.css";

const Search = ({ children, onSubmit }) => {
  return (
    <>
      <div>Search</div>
      <div>{children}</div>
      <form onSubmit={onSubmit}>
        <div className={css.fancyInput}>
          <input
            className={css.input}
            id='mainInput'
            type='text'
            placeholder='Enter the text'
          />
          <ButonFancy className={css.blackButton}>Submit</ButonFancy>
        </div>
      </form>
      <NavLink to='/search'>Search</NavLink>
    </>
  );
};

Search.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};

export default Search;
