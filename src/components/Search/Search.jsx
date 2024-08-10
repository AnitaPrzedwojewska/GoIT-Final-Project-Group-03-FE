import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notiflix from "notiflix";
import ButonFancy from "../ButonFancy/ButonFancy";
import routes from "../../constants/routes";
import css from "./Search.module.css";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      Notiflix.Notify.warning("Please fill the input field before searching.");
      return;
    }
    navigate(`/${routes.SEARCH}?keyword=${encodeURIComponent(inputValue)}`);
  };

  return (
    <>
      <div className={css.contentContainer}>
        <span className={css.greenTitle}>So</span>
        <span className={css.blackTitle}>Yummy</span>
        <div className={css.content}>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </div>
      </div>
      <form className={css.form} onSubmit={onSubmit}>
        <div className={css.fancyInput}>
          <input
            className={css.input}
            id="mainInput"
            type="text"
            placeholder="Enter the text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} //
          />
          <ButonFancy className={css.blackButton} type="submit">
            Search
          </ButonFancy>
        </div>
      </form>
    </>
  );
};

export default Search;
