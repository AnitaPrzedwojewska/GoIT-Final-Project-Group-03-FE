// import css from "./RecipePageHero.module.css";
import PropTypes from "prop-types";

const RecipePageHero = ({ children }) => {
  return (
    <>
      <div>RecipePageHero</div>
      <div>{children}</div>
    </>
  );
};

RecipePageHero.propTypes = {
  children: PropTypes.node,
};

export default RecipePageHero;
