// import css from "./RecipeIngredientsFields.module.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";

const RecipeIngredientsFields = ({ formData, setFormData }) => {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredientsCount, setIngredientsCount] = useState(1);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/ingredients/list"
        );
        setIngredientsList(response.data);
      } catch (error) {
        console.error("Error fetching ingredients", error);
      }
    };

    fetchIngredients();
  }, []);

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = formData.ingredients.slice();
    updatedIngredients[index] = {
      ...updatedIngredients[index],
      [field]: value,
    };
    setFormData({ ...formData, ingredients: updatedIngredients });
  };

  const addIngredientField = () => {
    setIngredientsCount(ingredientsCount + 1);
    setFormData({ ...formData, ingredients: [...formData.ingredients, {}] });
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
              value={formData.ingredients[index]?.name || ""}
              onChange={(e) =>
                handleIngredientChange(index, "name", e.target.value)
              }
              required
            >
              <option value="">Select an ingredient</option>
              {ingredientsList.map((ingredient) => (
                <option key={ingredient} value={ingredient}>
                  {ingredient}
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
              <option value="tbs">tbs</option>
              <option value="tsp">tsp</option>
              <option value="kg">kg</option>
              <option value="g">g</option>
              <option value="ml">ml</option>
              <option value="piece">piece</option>
            </select>
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
        name: PropTypes.string,
        quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        measure: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default RecipeIngredientsFields;
