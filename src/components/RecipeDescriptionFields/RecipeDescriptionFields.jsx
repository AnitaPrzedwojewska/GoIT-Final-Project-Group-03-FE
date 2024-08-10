import css from "./RecipeDescriptionFields.module.css";
import PhotoIcon from "../IconsSVG/PhotoIcon.jsx";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import timeOptions from "../../constants/timeOptions";

import getRecipeCategories from "../../api/recipes/getRecipeCategories.js";

const RecipeDescriptionFields = ({ formData, setFormData }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getRecipeCategories();
        setCategories(response);
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
      <div className={css.thumbContainer}>
        <div>
          <label className={css.thumb}>
            <input
              type="file"
              name="thumb"
              onChange={(e) =>
                setFormData({ ...formData, thumb: e.target.files[0] })
              }
            />
            <PhotoIcon className={css.icon}></PhotoIcon>
          </label>
        </div>
        <div className={css.container}>
          <div className={css.box}>
            <input
              className={css.title}
              placeholder="enter item title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={css.box}>
            <input
              className={css.title}
              placeholder="Enter about recipe"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={css.boxSelect}>
            <label className={css.label}>Category</label>
            <select
              className={css.select}
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select</option>
              {categories.map((category) => (
                <option key={category.title} value={category.title}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          <div className={css.boxSelect}>
            <label className={css.label}>Cooking Time</label>
            <select
              className={css.select}
              name="time"
              value={formData.time}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              {timeOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
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
