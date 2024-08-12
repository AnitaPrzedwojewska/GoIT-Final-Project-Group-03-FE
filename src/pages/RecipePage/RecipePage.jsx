// node modules
import { useEffect } from "react";

// npm packages
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';

// functions
import { setRecipe } from '../../redux/recipes/recipes.slices';
import getRecipeById from "../../api/recipes/getRecipeById";

// components
import RecipePageHero from "../../components/RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "../../components/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "../../components/RecipePreparation/RecipePreparation";
import RecipeBg from "../../components/RecipeBg/RecipeBg";

const RecipePage = () => {
  const { recipeId } = useParams();
  console.log('recipeId: ', recipeId);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await getRecipeById(recipeId);
        console.log('fetchRecipe - response: ', response);
        dispatch(setRecipe(response));
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };
    console.log('Uruchomiony useEffect.')
    fetchRecipe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
      <RecipeBg></RecipeBg>
      <RecipePageHero />
      <RecipeIngredientsList></RecipeIngredientsList>
      <RecipePreparation></RecipePreparation>
    </>
  );
};

export default RecipePage;
