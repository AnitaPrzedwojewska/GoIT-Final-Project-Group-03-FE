// import css from "./RecipeIngredientsFields.module.css";
import PropTypes from "prop-types";

const RecipeIngredientsFields = ({ children }) => {
  return (
    <>
      <div>RecipeIngredientsFields</div>
      <div>{children}</div>
    </>
  );
};

RecipeIngredientsFields.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipeIngredientsFields;
