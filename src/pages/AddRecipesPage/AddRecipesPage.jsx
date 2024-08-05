import { useState } from "react";

import AddRecipeForm from "../../components/AddRecipeForm/AddRecipeForm";
import FollowUs from "../../components/FollowUs/FollowUs";
import MainTitle from "../../components/MainTitle/MainTitle";
import PopularRecipe from "../../components/PopularRecipe/PopularRecipe";

const AddRecipesPage = () => {
  const [formData, setFormData] = useState({
    file: null,
    title: "",
    description: "",
    category: "",
    time: "",
    ingredients: [],
    instructions: "",
  });

  return (
    <>
      <MainTitle title="Add Recipe"></MainTitle>
      <AddRecipeForm
        formData={formData}
        setFormData={setFormData}
      ></AddRecipeForm>
      <FollowUs></FollowUs>
      <PopularRecipe></PopularRecipe>
    </>
  );
};

export default AddRecipesPage;
