import css from "./btnFancy.module.css";

export const FANCY_BLACK_BUTTON = ({ label, onClick }) => (
  <button
    className={`${css.fancy_button} ${css["fancy_black_button"]}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export const FANCY_GREEN_BUTTON = ({ label, onClick }) => (
  <button
    className={`${css.fancy_button} ${css["fancy_green_button"]}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export const FANCY_SINGIN_BUTTON = ({ onClick }) => (
  <button
    className={`${css.fancy_button} ${css["fancy_singin_button"]}`}
    onClick={onClick}
  >
    Sing in
  </button>
);

export const FANCY_ADD_FAVORITE_BUTTON = ({ onClick }) => (
  <button
    className={`${css.fancy_button} ${css["fancy_favorite_button"]}`}
    onClick={onClick}
  >
    Add to favorite recipes
  </button>
);
