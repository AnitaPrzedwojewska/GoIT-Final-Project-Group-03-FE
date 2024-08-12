// npm packages
import { useSelector } from "react-redux";

// functions
import { getRecipeIngredients } from "../../redux/recipes/recipes.selectors";
import addToShoppingList from '../../api/recipes/addToShoppingList.js';

import css from "./RecipeIngredientsList.module.css";
import Notiflix from "notiflix";

// components
// import RecipeTile from '../RecipeTile/RecipeTile.jsx';

const RecipeIngredientsList = () => {

  const ingredients = useSelector(getRecipeIngredients);

  console.log("IngredientsList - data:");
  console.log(ingredients);

  const handleShoppingList = async (
    event,
    ingredientId,
    measure) => {
    try {
      const input = event.target;
      input.disable = true;
      console.log("ingredientId: ", ingredientId);
      console.log("measure: ", measure);
      const response = await addToShoppingList({ ingredientId, measure });
      if (!response.error) {
        Notiflix.Notify.success("Ingredient added to shopping list.");
      } else {
        Notiflix.Notify.warning(
          "Ingredient is already in your shopping list!"
        );
      }
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure("Something went wrong. Ingredient not added to shopping list!");
    }
  }

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
                <img src={ingr.id.thb} alt={ingr.id.ttl}  />
              </div>
              <div className={css.name}>
                {ingr.id.ttl}
              </div>
            </div>
            <div className={css.ingredientContentMeasure}>
              <div className={css.measure}>
                {ingr.measure}
              </div>
              <input type="checkbox" name="inShoppingList" className={css.checkbox} onMouseUp={(e) => {
                console.log('handleShoppingList will start');
                console.log("ingr.id._id: ", ingr.id._id);
                console.log("params: ", ingr.id._id, ingr.measure);

                handleShoppingList(e, ingr.id._id, ingr.measure);}}></input>
            </div>
          </li>
        )))}
      </ul>) }
    </>
  );
};

export default RecipeIngredientsList;
