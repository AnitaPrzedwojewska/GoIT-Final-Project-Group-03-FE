import {NavLink} from 'react-router-dom'
// import css from "./AddRecipeForm.module.css";
import PropTypes from "prop-types";

import RecipeDescriptionFields from '../RecipeDescriptionFields/RecipeDescriptionFields'
import RecipeIngredientsFields from '../RecipeIngredientsFields/RecipeIngredientsFields'
import RecipePreparationFields from '../RecipePreparationFields/RecipePreparationFields'

const AddRecipeForm = ({ children }) => {
  return (
    <>
      <div>AddRecipeForm</div>
      <div>{children}</div>
      <RecipeDescriptionFields></RecipeDescriptionFields>
      <RecipeIngredientsFields></RecipeIngredientsFields>
      <RecipePreparationFields></RecipePreparationFields>
      <NavLink to='/my'>Add</NavLink>
    </>
  );
};

AddRecipeForm.propTypes = {
  children: PropTypes.node,
};

export default AddRecipeForm;
