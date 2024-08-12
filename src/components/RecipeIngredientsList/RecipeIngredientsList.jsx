// npm packages
import { useSelector } from "react-redux";

// functions
import { getRecipeIngredients } from "../../redux/recipes/recipes.selectors";

import css from "./RecipeIngredientsList.module.css";

// components
// import RecipeTile from '../RecipeTile/RecipeTile.jsx';

const RecipeIngredientsList = () => {

  const ingredients = useSelector(getRecipeIngredients);
  console.log("IngredientsList - data:");
  console.log(ingredients);
  return (
    <>
      <div className={css.ingredientHeader}>
        <div className={css.ingredientHeaderName}>
            <p>Ingredients</p>
        </div>
        <div className={css.ingredientHeaderSpecify}>
            <p>Number</p>
            <p className={css.addToListHeadline}>Add to list</p>
        </div>
      </div>
      { !ingredients ? (<p>Sorry, something went wrong, </p>) :
        (<ul className={css.ingredientContainer}>
        {ingredients.length>0 && (ingredients.map((ingr) => (
          <li className={css.ingredient} key={ingr._id}>
            <div className={css.ingredientContentName}>
              <div className={css.ingredientImg}>
                {ingr.thb}
              </div>
              <div className={css.name}>
                {ingr.name}
              </div>
            </div>
            <div className={css.ingredientContentMeasure}>
              <div className={css.measure}>
                {ingr.quantity} {ingr.measure}
              </div>
              <div>
                <input type="checkbox" className={css.checkbox}></input>
              </div> 
            </div>
          </li>
        )))}
      </ul>) }
    </>
  );
};

export default RecipeIngredientsList;
