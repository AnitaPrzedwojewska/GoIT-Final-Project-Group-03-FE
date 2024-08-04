import { NavLink } from "react-router-dom";

import AuthForm from '../../components/AuthForm/AuthForm'

const RegisterPage = () => {
  return (
    <>
      <AuthForm />
      <NavLink to='/signin'>Sign in</NavLink>
    </>
  );
};

export default RegisterPage;
