import RecipeIngredientsList from "../../components/RecipeIngredientsList/RecipeIngredientsList";
import RecipePageHero from "../../components/RecipePageHero/RecipePageHero";
import RecipePreparation from "../../components/RecipePreparation/RecipePreparation";

const RecipePage = () => {
  return (
    <>
      <RecipePageHero></RecipePageHero>
      <RecipeIngredientsList></RecipeIngredientsList>
      <RecipePreparation></RecipePreparation>
    </>
  );
};

export default RecipePage;
