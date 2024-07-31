// import css from "./MyRecipesList.module.css";
import PropTypes from "prop-types";

import MyRecipesItem from '../MyRecipesItem/MyRecipesItem'

const MyRecipesList = ({ children }) => {
  return (
    <>
      <div>MyRecipesList</div>
      <div>{children}</div>
      <MyRecipesItem></MyRecipesItem>
    </>
  );
};

MyRecipesList.propTypes = {
  children: PropTypes.node,
};

export default MyRecipesList;
