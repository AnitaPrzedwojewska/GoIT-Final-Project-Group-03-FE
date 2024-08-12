import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notiflix from "notiflix";
import routes from "../../constants/routes";

import ButonFancy from "../ButonFancy/ButonFancy";
import css from "./SearchForm.module.css";

const SearchForm = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      Notiflix.Notify.warning("Please enter a search term before searching.");
      return;
    }
    navigate(`/${routes.SEARCH}?keyword=${encodeURIComponent(inputValue)}`);
  };

  return (
    <form className={css.form} onSubmit={onSubmit}>
      <div className={css.fancyInput}>
        <input
          className={css.input}
          id="searchInput"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search recipes..."
        />
        <ButonFancy className={css.greenButton} type="submit">
          Search
        </ButonFancy>
      </div>
    </form>
  );
};

export default SearchForm;
