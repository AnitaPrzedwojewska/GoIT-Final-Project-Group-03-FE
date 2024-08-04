import AddRecipeForm from "../../components/AddRecipeForm/AddRecipeForm";
import FollowUs from "../../components/FollowUs/FollowUs";
import MainTitle from "../../components/MainTitle/MainTitle";
import PopularRecipe from "../../components/PopularRecipe/PopularRecipe";

const AddRecipesPage = () => {
  return (
    <>
      <MainTitle title="Add Recipe"></MainTitle>
      <AddRecipeForm></AddRecipeForm>
      <FollowUs></FollowUs>
      <PopularRecipe></PopularRecipe>
    </>
  );
};

export default AddRecipesPage;
