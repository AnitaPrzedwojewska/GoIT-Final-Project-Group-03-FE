// npm packages
import { useSelector } from "react-redux";

// functions
import { getRecipeIngredients } from "../../redux/recipes/recipes.selectors";

// styles
// import css from "./RecipeIngredientsList.module.css";

const RecipeIngredientsList = () => {

  const ingredients = useSelector(getRecipeIngredients);
  console.log("IngredientsList - data:");
  console.log(ingredients);

  return (
    <>
      <div>RecipeIngredientsList</div>
      { !ingredients ? (<p>Sorry, something wrong, </p>) :
        (<ul>
        {ingredients.length>0 && (ingredients.map((ingr) => (
          <li key={ingr._id}>{ingr._id} - {ingr.measure}</li>
        )))}
      </ul>) }
    </>
  );
};

export default RecipeIngredientsList;
