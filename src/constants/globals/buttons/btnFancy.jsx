import css from "./btnFancy.module.css";

export const FANCY_BLACK_BUTTON = ({ label, onClick }) => (
  <button
    className={`${css.fancyButton} ${css["blackButton"]}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export const FANCY_GREEN_BUTTON = ({ label, onClick }) => (
  <button
    className={`${css.fancyButton} ${css["greenButton"]}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export const FANCY_SINGIN_BUTTON = ({ onClick }) => (
  <button
    className={`${css.fancyButton} ${css["singinButton"]}`}
    onClick={onClick}
  >
    Sing in
  </button>
);

export const FANCY_ADD_FAVORITE_BUTTON = ({ onClick }) => (
  <button
    className={`${css.fancyButton} ${css["favoriteButton"]}`}
    onClick={onClick}
  >
    Add to favorite recipes
  </button>
);
