// import css from "./MyRecipesList.module.css";
import PropTypes from "prop-types";

import MainTitle from "../MainTitle/MainTitle";
import MyRecipesItem from "../MyRecipesItem/MyRecipesItem";

const MyRecipesList = ({ children }) => {
  return (
    <>
      <MainTitle title="My Recipes"></MainTitle>
      <div>{children}</div>
      <MyRecipesItem></MyRecipesItem>
    </>
  );
};

MyRecipesList.propTypes = {
  children: PropTypes.node,
};

export default MyRecipesList;
