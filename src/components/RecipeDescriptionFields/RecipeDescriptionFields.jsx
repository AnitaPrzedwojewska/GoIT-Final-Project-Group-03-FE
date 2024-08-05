// import css from "./RecipeDescriptionFields.module.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// import axios from "axios";
import timeOptions from "../../constants/timeOptions";

import getRecipeCategories from '../../api/recipes/getRecipeCategories.js';

const RecipeDescriptionFields = ({ formData, setFormData }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // const response = await axios.get(
        //   "http://localhost:8000/recipes/category-list"
        // );
        const response = getRecipeCategories();
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <div>
          <input
            type="file"
            name="file"
            onChange={(e) =>
              setFormData({ ...formData, file: e.target.files[0] })
            }
            required
          />
        </div>
        <label>Enter item title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Enter about recipe</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>
          Cooking Time
          <select
            name="time"
            value={formData.time}
            onChange={handleInputChange}
          >
            <option value="">Select cooking time</option>
            {timeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
    </>
  );
};

RecipeDescriptionFields.propTypes = {
  formData: PropTypes.shape({
    file: PropTypes.object,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default RecipeDescriptionFields;
