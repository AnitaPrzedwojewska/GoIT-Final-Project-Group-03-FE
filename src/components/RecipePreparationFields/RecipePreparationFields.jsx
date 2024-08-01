// import css from "./RecipePreparationFields.module.css";
import PropTypes from "prop-types";

const RecipePreparationFields = ({ children }) => {
  return (
    <>
      <div>RecipePreparationFields</div>
      <div>{children}</div>
    </>
  );
};

RecipePreparationFields.propTypes = {
  children: PropTypes.node,
};

export default RecipePreparationFields;
