import { useEffect, useState } from "react";

import getRecipeById from "../../api/recipes/getRecipeById.js";

import css from "./Recipe.module.css";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await getRecipeById(recipeId);
        setRecipe(response);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    fetchRecipe();
  }, [recipeId]);

  return (
    <div className={css.box}>
      {recipe.title}
    </div>
  );
};

export default Recipe;
