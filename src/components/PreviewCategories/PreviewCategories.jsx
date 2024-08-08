import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import getRecipeByCategory from "../../api/recipes/getRecipesByCategory";
import css from "./PreviewCategories.module.css";

const PreviewCategories = () => {
  const categories = ["Breakfast", "Miscellaneous", "Chicken", "Dessert"];
  const [recipes, setRecipes] = useState({});
  const [itemsToShow, setItemsToShow] = useState(4); // domyślnie 4

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
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <div className={css.categoryContainer} key={category}>
          <h3 className={css.categoryName}>{category}</h3>

          <ul className={css.recipeList}>
            {recipes[category]?.slice(0, itemsToShow).map((recipe) => (
              <li key={recipe._id} className={css.recipeItem}>
                <img
                  src={recipe.preview}
                  alt={recipe.title}
                  className={css.recipeImage}
                />
                <p className={css.recipeTitle}>{recipe.title}</p>
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
        <NavLink to="/categories/:categoryName" className={css.buttonFancy}>
          Other Categories
        </NavLink>
      </div>
    </div>
  );
};

export default PreviewCategories;
