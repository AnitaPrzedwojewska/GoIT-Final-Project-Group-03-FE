// import css from "./RecipeDescriptionFields.module.css";
import PropTypes from "prop-types";

const RecipeDescriptionFields = ({ children }) => {
  return (
    <>
      <div>RecipeDescriptionFields</div>
      <div>{children}</div>
    </>
  );
};

RecipeDescriptionFields.propTypes = {
  children: PropTypes.node,
};

export default RecipeDescriptionFields;
