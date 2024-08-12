import { useState } from "react";

import css from "./AddRecipesPage.module.css";
import AddRecipeForm from "../../components/AddRecipeForm/AddRecipeForm";
import FollowUs from "../../components/FollowUs/FollowUs";
import MainTitle from "../../components/MainTitle/MainTitle";
import PopularRecipes from "../../components/PopularRecipes/PopularRecipes";

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
        <div className={css.side}>
          <h3 className={css.header}>Follow Us</h3>
          <FollowUs className={css.followus}></FollowUs>
          <PopularRecipes></PopularRecipes>
        </div>
      </div>
    </>
  );
};

export default AddRecipesPage;
