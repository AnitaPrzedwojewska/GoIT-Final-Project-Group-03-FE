import css from "./AuthNav.module.css";

const AuthNavWelcome = () => {
  return (
    <div className={css.welcome}>
      <h1 className={css.title}>Welcome to the app</h1>
      <p className={css.text}>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>
    </div>
  );
};

export default AuthNavWelcome;
