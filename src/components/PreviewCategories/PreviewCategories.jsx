// node modules
import { useEffect, useState } from "react";

// npm packages
import { NavLink } from "react-router-dom";

// functions
import getRecipeByCategory from "../../api/recipes/getRecipesByCategory";

// components
import RecipeTile from "../RecipeTile/RecipeTile";

// styles
import css from "./PreviewCategories.module.css";

const PreviewCategories = () => {
  const categories = ["Breakfast", "Miscellaneous", "Chicken", "Dessert"];
  const [recipes, setRecipes] = useState({});
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsToShow(1);
      } else if (width < 1440) {
        setItemsToShow(2);
      } else {
        setItemsToShow(4);
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    const fetchRecipes = async () => {
      const fetchedRecipes = {};
      for (const category of categories) {
        try {
          const response = await getRecipeByCategory(category);
          fetchedRecipes[category] = response;
        } catch (error) {
          console.error(`Error fetching recipes for ${category}:`, error);
        }
      }
      setRecipes(fetchedRecipes);
    };
    fetchRecipes();
    return () => {
      window.removeEventListener("resize", updateItemsToShow); // cleanup
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <div className={css.categoryContainer} key={category}>
          <h3 className={css.categoryName}>{category}</h3>

          <ul className={css.recipeList}>
            {recipes[category]?.slice(0, itemsToShow).map((recipe) => (
              <li key={recipe._id} className={css.recipeItem}>
                <RecipeTile
                  id={recipe._id}
                  title={recipe.title}
                  preview={recipe.preview}
                />
              </li>
            ))}
          </ul>

          <div className={css.buttonContainer}>
            <NavLink to={`/categories/${category}`} className={css.button}>
              See all
            </NavLink>
          </div>
        </div>
      ))}
      <div className={css.buttonFancyContainer}>
        <NavLink to="/categories/Breakfast" className={css.buttonFancy}>
          Other Categories
        </NavLink>
      </div>
    </div>
  );
};

export default PreviewCategories;
