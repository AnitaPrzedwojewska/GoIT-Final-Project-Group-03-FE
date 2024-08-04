import css from "./AuthNav.module.css";

const AuthNavWelcome = () => {
  return (
    <div className={css.welcome}>
      <h1 className={css.title}>Welcome to the app</h1>
      <p className={css.text}>Sign in</p>
    </div>
  );
};

export default AuthNavWelcome;
