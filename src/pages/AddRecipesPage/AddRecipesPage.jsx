import { useState } from "react";

import css from "./AddRecipesPage.module.css";
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
      <MainTitle>Add recipe</MainTitle>
      <div className={css.container}>
        <AddRecipeForm
          formData={formData}
          setFormData={setFormData}
        ></AddRecipeForm>
        <FollowUs className={css.followus}></FollowUs>
        <PopularRecipe></PopularRecipe>
      </div>
    </>
  );
};

export default AddRecipesPage;
