// import css from "./RecipePreparation.module.css";
import PropTypes from "prop-types";

const RecipePreparation = ({ children }) => {
  return (
    <>
      <div>RecipePreparation</div>
      <div>{children}</div>
    </>
  );
};

RecipePreparation.propTypes = {
  children: PropTypes.node,
};

export default RecipePreparation;
