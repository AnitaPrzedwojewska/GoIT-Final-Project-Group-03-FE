// import css from "./SearchBar.module.css";
import PropTypes from "prop-types";

import SearchForm from '../SearchForm/SearchForm'
import SearchTypeSelector from '../SearchTypeSelector/SearchTypeSelector'

const SearchBar = ({ children }) => {
  return (
    <>
      <div>SearchBar</div>
      <div>{children}</div>
      <SearchForm></SearchForm>
      <SearchTypeSelector></SearchTypeSelector>
    </>
  );
};

SearchBar.propTypes = {
  children: PropTypes.node,
};

export default SearchBar;
