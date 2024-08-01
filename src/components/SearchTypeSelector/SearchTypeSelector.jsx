// import css from "./SearchTypeSelector.module.css";
import PropTypes from "prop-types";

const SearchTypeSelector = ({ children }) => {
  return (
    <>
      <div>SearchTypeSelector</div>
      <div>{children}</div>
    </>
  );
};

SearchTypeSelector.propTypes = {
  children: PropTypes.node,
};

export default SearchTypeSelector;
