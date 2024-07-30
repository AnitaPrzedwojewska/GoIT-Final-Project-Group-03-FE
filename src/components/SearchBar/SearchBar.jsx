// import css from "./SearchBar.module.css";
import PropTypes from "prop-types";

const SearchBar = ({ children }) => {
  return (
    <>
      <div>SearchBar</div>
      <div>{children}</div>
    </>
  );
};

SearchBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchBar;
