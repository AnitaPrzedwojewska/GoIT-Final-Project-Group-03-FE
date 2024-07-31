// import css from "./SearchedRecipesList.module.css";
import PropTypes from "prop-types";

import RecipesList from '../RecipesList/RecipesList'

const SearchedRecipesList = ({ children }) => {
  return (
    <>
      <div>SearchedRecipesList</div>
      <div>{children}</div>
      <RecipesList></RecipesList>
    </>
  );
};

SearchedRecipesList.propTypes = {
  children: PropTypes.node,
};

export default SearchedRecipesList;
