// import css from "./SearchedRecipesList.module.css";
import PropTypes from "prop-types";

const SearchedRecipesList = ({ children }) => {
  return (
    <>
      <div>SearchedRecipesList</div>
      <div>{children}</div>
    </>
  );
};

SearchedRecipesList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchedRecipesList;
