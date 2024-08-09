import { useEffect, useState } from "react";
// import { useSelector } from 'react-redux';

// import { getCategory } from '../../redux/recipes/recipes.selectors.js';
import getRecipesByCategory from "../../api/recipes/getRecipesByCategory.js";

import RecipeTile from '../RecipeTile/RecipeTile.jsx';

import css from "./RecipesList.module.css";
import { useParams } from "react-router-dom";
// import PropTypes from "prop-types";

const RecipesList = () => {

  const { categoryName } = useParams();
  const [recipes, setRecipes] = useState([]);



  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getRecipesByCategory(categoryName);
        setRecipes(response);
        console.log('fetchRecipes - response: ', response);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchRecipes();
  }, [categoryName]);

  return (
    <div className={css.box}>
      {recipes.length === 0 ? (
        <p>Sorry, something wrong. No results!</p>
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
//   items: PropTypes.number,
// };

export default RecipesList;
