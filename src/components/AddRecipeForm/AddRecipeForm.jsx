// import css from "./AddRecipeForm.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import RecipeDescriptionFields from "../RecipeDescriptionFields/RecipeDescriptionFields";
import RecipeIngredientsFields from "../RecipeIngredientsFields/RecipeIngredientsFields";
import RecipePreparationFields from "../RecipePreparationFields/RecipePreparationFields";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    file: null,
    title: "",
    description: "",
    category: "",
    time: "",
    ingredients: [{}],
    instructions: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new formData();
    formPayload.append("file", formData.file);
    formPayload.append("title", formData.title);
    formPayload.append("description", formData.description);
    formPayload.append("category", formData.category);
    formPayload.append("time", formData.time);
    formPayload.append("ingredients", JSON.stringify(formData.ingredients));
    formPayload.append("instructions", formData.instructions);

    try {
      const response = await axios.post(
        "http://localhost:8000/ownRecipes/add",
        formPayload,
        {
          headers: {
            "Content-Type": "multipart/form/data",
          },
        }
      );
      console.log("Recipe added successfully:", response.data);
      navigate("/ownRecipes");
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <RecipeDescriptionFields formData={formData} setFormData={setFormData} />
      <RecipeIngredientsFields formData={formData} setFormData={setFormData} />
      <RecipePreparationFields formData={formData} setFormData={setFormData} />
      <button type="submit">Add</button>
    </form>
  );
};

AddRecipeForm.propTypes = {
  formData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        measure: PropTypes.string,
      })
    ),
    instructions: PropTypes.string,
    file: PropTypes.object,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default AddRecipeForm;
