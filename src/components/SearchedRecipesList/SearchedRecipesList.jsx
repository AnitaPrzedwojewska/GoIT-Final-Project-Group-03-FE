import Notiflix from "notiflix";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getRecipesByKeyword from "../../api/recipes/getRecipesByKeyword";
import RecipeTile from "../RecipeTile/RecipeTile";
import css from "./SearchedRecipesList.module.css";

const SearchedRecipesList = () => {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("keyword");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getRecipesByKeyword(searchTerm);
        console.log(response.data.results);
        const numberOfResults = response.data.results.length;
        Notiflix.Notify.success(`We found ${numberOfResults} recipes.`);
        setRecipes(response.data.results);
      } catch (error) {
        setError("Something went wrong. Please try again.");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm && searchTerm.trim() !== "") {
      fetchRecipes();
    } else {
      setRecipes([]);
      setLoading(false);
    }
  }, [searchTerm]);

  // Przenieś powiadomienie poza useEffect
  useEffect(() => {
    if (!loading && !error && searchTerm && searchTerm.trim() === "") {
      Notiflix.Notify.warning("Please enter a search term.");
    }
  }, [loading, error, searchTerm]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={css.box}>
      {recipes.length === 0 ? (
        <div className={css.noResults}>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="../../../public/images-bkg/mobile-search-failed-overturned-basket.png"
            />
            <source
              media="(max-width: 1440x)"
              srcSet="../../../public/images-bkg/tablet-search-failed-overturned-basket.png"
            />
            <img
              src="../../../public/images-bkg/desktop-search-failed-overturned-basket.png"
              alt="Brak wyników"
            />
          </picture>
          <p>Try looking for something else..</p>
        </div>
      ) : (
        <ul className={css.list}>
          {recipes.map((rec) => (
            <li
              key={rec._id}
              className={`${css.menuItem} ${
                searchTerm === rec.title && css.active
              }`}
            >
              <RecipeTile
                id={rec._id}
                title={rec.title}
                preview={rec.preview}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchedRecipesList;
