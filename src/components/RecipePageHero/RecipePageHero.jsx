// import css from "./RecipePageHero.module.css";
import PropTypes from "prop-types";

import MainPageTitle from '../MainPageTitle/MainPageTitle'

const RecipePageHero = ({ children }) => {
  return (
    <>
      <div>RecipePageHero</div>
      <div>{children}</div>
      <MainPageTitle></MainPageTitle>
    </>
  );
};

RecipePageHero.propTypes = {
  children: PropTypes.node,
};

export default RecipePageHero;
