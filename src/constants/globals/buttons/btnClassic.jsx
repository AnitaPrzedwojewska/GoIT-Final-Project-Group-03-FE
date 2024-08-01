import css from "./btnClassic.module.css";

// export const CLASSIC_BLACK_BUTTON = ({ label, onClick }) => (
//   <button onClick={onClick}>{label}</button>
// );

export const CLASSIC_SUBSCRIBE_BUTTON = ({ label, onClick }) => (
  <button className={`${css.subscribeClassicButton}`} onClick={onClick}>
    {label}
  </button>
);

export const CLASSIC_REGISTER_BUTTON = ({ label, onClick }) => (
  <button className={`${css.registerClassicButton}`} onClick={onClick}>
    {label}
  </button>
);

export const CLASSIC_LOGOUT_BUTTON = ({ onClick }) => (
  <button
    className={`${css.smallClassicButton} ${css["buttonLogout"]}`}
    onClick={onClick}
  >
    Log out
  </button>
);

export const CLASSIC_CANCEL_BUTTON = ({ onClick }) => (
  <button
    className={`${css.smallClassicButton} ${css["buttonCancel"]}`}
    onClick={onClick}
  >
    Cancel
  </button>
);
