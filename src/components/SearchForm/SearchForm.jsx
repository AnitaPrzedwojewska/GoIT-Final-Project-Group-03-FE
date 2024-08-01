// import css from "./SearchForm.module.css";
import PropTypes from "prop-types";

const SearchForm = ({ children }) => {
  return (
    <>
      <div>SearchForm</div>
      <div>{children}</div>
    </>
  );
};

SearchForm.propTypes = {
  children: PropTypes.node,
};

export default SearchForm;
