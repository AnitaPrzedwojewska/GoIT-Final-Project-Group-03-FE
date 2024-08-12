// npm packages
import { useSelector } from "react-redux";
import Notiflix from "notiflix";

// functions
import { getForRecipePageHero } from "../../redux/recipes/recipes.selectors";
import addFavorite from "../../api/recipes/addFavorite";

// styles
import css from "./RecipePageHero.module.css";

import ButonFancy from "../ButonFancy/ButonFancy";

const RecipePageHero = () => {
  const { _id, title, description, time } = useSelector(getForRecipePageHero);
  console.log("PageHero - data:");
  console.log(`${_id}: ${title} - ${time}`);
  console.log(description);

  const handleAddFavorite = async () => {
    const response = await addFavorite(_id);

    if (!response.error) {
      Notiflix.Notify.success("Recipe added to favorites!");
    } else {
      Notiflix.Notify.warning("Recipe is already in your favorites!");
    }
  };

  return (
    <>
      <div className={css.recipeHeroContainer}>
        <h1 className={css.recipeName}>{title}</h1>
        <p className={css.desc}>{description}</p>
        <ButonFancy className={css.addRecipeButton} onClick={handleAddFavorite}>
          Add to favourite recipes
        </ButonFancy>
        <p>{time} min</p>
      </div>
    </>
  );
};

export default RecipePageHero;
