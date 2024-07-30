// import css from "./AddRecipeForm.module.css";
import PropTypes from "prop-types";

const AddRecipeForm = ({ children }) => {
  return (
    <>
      <div>AddRecipeForm</div>
      <div>{children}</div>
    </>
  );
};

AddRecipeForm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AddRecipeForm;
