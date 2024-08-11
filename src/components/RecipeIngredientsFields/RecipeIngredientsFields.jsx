import css from "./RecipeIngredientsFields.module.css";
import MinusIcon from "../IconsSVG/MinusIcon.jsx";
import PlusIcon from "../IconsSVG/PlusIcon.jsx";
import CloseIcon from "../IconsSVG/CloseIcon.jsx";
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
    if (field === "_id") {
      const selectedIngredient = ingredientsList.find(
        (ingredient) => ingredient._id === value
      );
      updatedIngredients[index] = {
        ...updatedIngredients[index],
        _id: selectedIngredient._id,
        ttl: selectedIngredient.ttl,
        thb: selectedIngredient.thb,
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
        { _id: "", ttl: "", quantity: "", measure: "" },
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
      <div className={css.thumbContainer}>
        <div className={css.boxOne}>
          <h2>Ingredients</h2>
          <div className={css.counterBox}>
            <button
              className={css.counterButton}
              type="button"
              onClick={removeIngredientField}
            >
              <MinusIcon></MinusIcon>
            </button>
            <p className={css.counter}>{ingredientsCount}</p>
            <button
              className={css.counterButton}
              type="button"
              onClick={addIngredientField}
            >
              <PlusIcon></PlusIcon>
            </button>
          </div>
        </div>
        {Array.from({ length: ingredientsCount }).map((_, index) => (
          <div className={css.ingredient} key={index}>
            <select
              className={css.select}
              value={formData.ingredients[index]?._id || ""}
              onChange={(e) =>
                handleIngredientChange(index, "_id", e.target.value)
              }
              required
            >
              <option value="">Select</option>
              {ingredientsList.map((ingredient) => (
                <option key={ingredient._id} value={ingredient._id}>
                  {ingredient.ttl}
                </option>
              ))}
            </select>
            <div className={css.boxTwo}>
              <input
                className={css.quantity}
                type="number"
                placeholder="Quantity"
                value={formData.ingredients[index]?.quantity || ""}
                onChange={(e) =>
                  handleIngredientChange(index, "quantity", e.target.value)
                }
                required
              />
              <select
                className={css.measure}
                placeholder="measure"
                value={formData.ingredients[index]?.measure || ""}
                onChange={(e) =>
                  handleIngredientChange(index, "measure", e.target.value)
                }
                required
              >
                <option value="">Select</option>
                {measures.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button
                className={css.closeButton}
                type="button"
                onClick={removeIngredientField}
              >
                <CloseIcon></CloseIcon>
              </button>
            </div>
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
        _id: PropTypes.string,
        ttl: PropTypes.string,
        quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        measure: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default RecipeIngredientsFields;
