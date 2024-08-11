import { NavLink } from "react-router-dom";

import css from "./SigninPage.module.css";

import AuthForm from "../../components/AuthForm/AuthForm";

const SigninPage = () => {
  return (
    <div className={css.signinPage}>
      <AuthForm />
      <NavLink className={css.link} to="/register">
        Registration
      </NavLink>
    </div>
  );
};

export default SigninPage;
