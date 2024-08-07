import { useEffect, useState } from "react";

import getRecipesByCategory from "../../api/recipes/getRecipesByCategory.js";

import RecipeItem from "./RecipeItem.jsx";

import css from "./RecipesList.module.css";
import PropTypes from "prop-types";

const RecipesList = ({ category = "Breakfast"}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getRecipesByCategory(category);
        setRecipes(response);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchRecipes();
  }, [category])

  return (
    <div className={css.box}>
      {recipes.length === 0 ? (
        <p>Sorry, something wrong. No results!</p>
      ) : (
        <ul className={css.menu}>
          {recipes.map((rec) => (
            <li
              key={rec.title}
              className={`${css.menuItem} ${
                category === rec.title && css.active
              }`}>
              <RecipeItem title={rec.title} url={rec.preview}></RecipeItem>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

RecipesList.propTypes = {
  category: PropTypes.String,
  items: PropTypes.number,
};

export default RecipesList;
