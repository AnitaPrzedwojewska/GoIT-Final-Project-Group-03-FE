import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import getRecipeById from "../../api/recipes/getRecipeById";

import RecipePageHero from "../../components/RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "../../components/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "../../components/RecipePreparation/RecipePreparation";

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await getRecipeById(recipeId);
        setRecipe(response);
        console.log('fetchRecipe - response: ', response);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchRecipe();
  },[])

  return (
    <>
      <RecipePageHero title={recipe.title}></RecipePageHero>
      <RecipeIngredientsList></RecipeIngredientsList>
      <RecipePreparation></RecipePreparation>
    </>
  );
};

export default RecipePage;
