import css from "./btnClassic.module.css";

// export const CLASSIC_BLACK_BUTTON = ({ label, onClick }) => (
//   <button onClick={onClick}>{label}</button>
// );

export const CLASSIC_SUBSCRIBE_BUTTON = ({ label, onClick }) => (
  <button className={`${css.subscribe_classic_button}`} onClick={onClick}>
    {label}
  </button>
);

export const CLASSIC_REGISTER_BUTTON = ({ label, onClick }) => (
  <button className={`${css.register_classic_button}`} onClick={onClick}>
    {label}
  </button>
);

export const CLASSIC_LOGOUT_BUTTON = ({ onClick }) => (
  <button
    className={`${css.small_classic_button} ${css["small_classic_button_logout"]}`}
    onClick={onClick}
  >
    Log out
  </button>
);

export const CLASSIC_CANCEL_BUTTON = ({ onClick }) => (
  <button
    className={`${css.small_classic_button} ${css["small_classic_button_cancel"]}`}
    onClick={onClick}
  >
    Cancel
  </button>
);
