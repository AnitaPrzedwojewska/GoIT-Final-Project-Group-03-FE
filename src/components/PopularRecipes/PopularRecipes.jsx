import css from "./PopularRecipes.module.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import getPopularRecipes from "../../api/recipes/getPopularRecipes";

const PopularRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setDisplayLimit(4);
      } else if (window.innerWidth >= 1440) {
        setDisplayLimit(4);
      } else {
        setDisplayLimit(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchPopularRecipes = async () => {
      try {
        const data = await getPopularRecipes();
        if (Array.isArray(data)) {
          setRecipes(data);
        } else {
          setRecipes([]);
        }
      } catch (error) {
        console.error("Error fetching popular recipes:", error);
        setRecipes([]);
      }
    };

    fetchPopularRecipes();
  }, []);

  return (
    <>
      <div className={css.container}>
        <h2 className={css.header}>Popular recipes</h2>
        <div className={css.itemsContainer}>
          {recipes.length > 0 ? (
            recipes.slice(0, displayLimit).map((recipe) => (
              <div key={recipe._id} className={css.linkContainer}>
                <NavLink
                  className={css.recipeItem}
                  to={`/recipes/${recipe._id}`}
                >
                  <img
                    src={
                      recipe.preview || "../../../public/images/no-image.png"
                    }
                    alt={recipe.title}
                    className={css.preview}
                  />
                  <div className={css.descriptionBox}>
                    <h3 className={css.title}>{recipe.title}</h3>
                    <p className={css.description}>{recipe.description}</p>
                  </div>
                </NavLink>
              </div>
            ))
          ) : (
            <p>No popular recipes found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PopularRecipes;
