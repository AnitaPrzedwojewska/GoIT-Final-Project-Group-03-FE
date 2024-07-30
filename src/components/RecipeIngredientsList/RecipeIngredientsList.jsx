// import css from "./RecipeIngredientsList.module.css";
import PropTypes from "prop-types";

const RecipeIngredientsList = ({ children }) => {
  return (
    <>
      <div>RecipeIngredientsList</div>
      <div>{children}</div>
    </>
  );
};

RecipeIngredientsList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipeIngredientsList;
