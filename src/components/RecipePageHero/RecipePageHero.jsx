// npm packages
import { useSelector } from "react-redux";

// functions
import { getForRecipePageHero } from "../../redux/recipes/recipes.selectors";

// styles
import css from "./RecipePageHero.module.css";

import ButonFancy from "../ButonFancy/ButonFancy"

const RecipePageHero = () => {

  const { _id, title, description, time } = useSelector(getForRecipePageHero);
  console.log("PageHero - data:");
  console.log(`${_id}: ${title} - ${time}`);
  console.log(description);

  return (
    <>
      <div className={css.recipeHeroContainer}>
        <div className={css.nameContainer}>
          <h1 className={css.recipeName}>{title}</h1>
        </div>
        <p className={css.desc}>{description}</p>
        <ButonFancy className={css.addRecipeButton}>Add to favourite recipes</ButonFancy>
        <p>{time} min</p>
      </div>
    </>
  );
};

export default RecipePageHero;