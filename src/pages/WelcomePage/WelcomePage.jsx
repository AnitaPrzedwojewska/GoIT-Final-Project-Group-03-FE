import css from "./WelcomePage.module.css";

import AuthNav from "../../components/AuthNav/AuthNav";

const WelcomePage = () => {
  return (
    <div className={css.welcome}>
      <AuthNav></AuthNav>
    </div>
  );
};

export default WelcomePage;
