import RecipePageHero from "../../components/RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "../../components/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "../../components/RecipePreparation/RecipePreparation";

const RecipePage = () => {
  return (
    <>
      <div>RecipePage</div>
      <RecipePageHero></RecipePageHero>
      <RecipeIngredientsList></RecipeIngredientsList>
      <RecipePreparation></RecipePreparation>
    </>
  );
};

export default RecipePage;
