import { NavLink } from "react-router-dom";

import css from './RegisterPage.module.css';

import AuthForm from '../../components/AuthForm/AuthForm'

const RegisterPage = () => {
  return (
    <div className={css.registerPage}>
      <AuthForm />
      <NavLink className={css.link} to='/signin'>Sign in</NavLink>
    </div>
  );
};

export default RegisterPage;
