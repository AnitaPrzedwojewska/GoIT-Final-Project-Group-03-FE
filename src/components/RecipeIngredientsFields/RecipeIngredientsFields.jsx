// import css from "./RecipeIngredientsFields.module.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import measures from "../../constants/measures";

import getIngredientsList from "../../api/recipes/getIngredientsList.js";

const RecipeIngredientsFields = ({ formData, setFormData }) => {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredientsCount, setIngredientsCount] = useState(1);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await getIngredientsList();
        setIngredientsList(response);
      } catch (error) {
        console.error("Error fetching ingredients", error);
      }
    };

    fetchIngredients();
  }, []);

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...formData.ingredients];
    if (field === "ingredientId") {
      const selectedIngredient = ingredientsList.find(
        (ingredient) => ingredient._id === value
      );
      updatedIngredients[index] = {
        ...updatedIngredients[index],
        ingredientId: selectedIngredient._id,
        name: selectedIngredient.ttl,
      };
    } else {
      updatedIngredients[index] = {
        ...updatedIngredients[index],
        [field]: value,
      };
    }
    setFormData({ ...formData, ingredients: updatedIngredients });
  };

  const addIngredientField = () => {
    setIngredientsCount(ingredientsCount + 1);
    setFormData({
      ...formData,
      ingredients: [
        ...formData.ingredients,
        { ingredientId: "", name: "", quantity: "", measure: "" },
      ],
    });
  };

  const removeIngredientField = () => {
    if (ingredientsCount > 1) {
      setIngredientsCount(ingredientsCount - 1);
      const updatedIngredients = formData.ingredients.slice(0, -1);
      setFormData({ ...formData, ingredients: updatedIngredients });
    }
  };

  return (
    <>
      <div>
        <h2>Ingredients</h2>
        <button type="button" onClick={addIngredientField}>
          +
        </button>
        <p>{ingredientsCount}</p>
        <button type="button" onClick={removeIngredientField}>
          -
        </button>
        {Array.from({ length: ingredientsCount }).map((_, index) => (
          <div key={index}>
            <select
              value={formData.ingredients[index]?.ingredientId || ""}
              onChange={(e) =>
                handleIngredientChange(index, "ingredientId", e.target.value)
              }
              required
            >
              <option value="">Select an ingredient</option>
              {ingredientsList.map((ingredient) => (
                <option key={ingredient._id} value={ingredient._id}>
                  {ingredient.ttl}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Quantity"
              value={formData.ingredients[index]?.quantity || ""}
              onChange={(e) =>
                handleIngredientChange(index, "quantity", e.target.value)
              }
              required
            />
            <select
              placeholder="measure"
              value={formData.ingredients[index]?.measure || ""}
              onChange={(e) =>
                handleIngredientChange(index, "measure", e.target.value)
              }
              required
            >
              <option value="">Select measure</option>
              {measures.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button type="button" onClick={removeIngredientField}>
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

RecipeIngredientsFields.propTypes = {
  formData: PropTypes.shape({
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        ingredientId: PropTypes.string,
        name: PropTypes.string,
        quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        measure: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default RecipeIngredientsFields;
