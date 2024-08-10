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
      <div>RecipeIngredientsList</div>
      { !ingredients ? (<p>Sorry, something wrong, </p>) :
        (<ul className={css.ingredientContainer}>
        {ingredients.length>0 && (ingredients.map((ingr) => (
          <li className={css.ingredient} key={ingr._id}>
            <div className={css.ingredientContentName}>
              <div className={css.ingredientImg}>
                IMG
              </div>
              <div className={css.name}>
                {ingr.name}
              </div>
            </div>
            <div className={css.ingredientContentMeasure}>
              <div className={css.measure}>
                {ingr.measure}
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
