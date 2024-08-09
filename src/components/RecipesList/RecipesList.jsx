// node modules
import { useEffect, useState } from "react";

// npm packages
import { useParams } from "react-router-dom";
// import PropTypes from "prop-types";

// functions
import getRecipesByCategory from "../../api/recipes/getRecipesByCategory.js";

// components
import RecipeTile from '../RecipeTile/RecipeTile.jsx';

// styles
import css from "./RecipesList.module.css";

const RecipesList = () => {
// const RecipesList = ({category, limit, page}) => {

  const { categoryName } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getRecipesByCategory(categoryName);
        // const response = await getRecipesByCategory(categoryName, page, limit);
        setRecipes(response);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchRecipes();
  }, [categoryName]);

  return (
    <div className={css.box}>
      {(!recipes || recipes.length === 0) ? (
        <p>Sorry, something is wrong. No results.</p>
      ) : (
        recipes.length > 0 && (
          <ul className={css.list}>
            {recipes.map((rec) => (
              <li
                key={rec._id}
                className={`${css.menuItem} ${
                  categoryName === rec.title && css.active
                }`}>
                <RecipeTile
                  id={rec._id}
                  title={rec.title}
                  preview={rec.preview} />
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

// RecipesList.propTypes = {
//   category: PropTypes.string
//   limit: PropTypes.number,
//   page: PropTypes.number,
// };

export default RecipesList;
