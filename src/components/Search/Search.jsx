// import css from "./Search.module.css";
import PropTypes from "prop-types";

const Search = ({ children }) => {
  return (
    <>
      <div>Search</div>
      <div>{children}</div>
    </>
  );
};

Search.propTypes = {
  children: PropTypes.node,
};

export default Search;
