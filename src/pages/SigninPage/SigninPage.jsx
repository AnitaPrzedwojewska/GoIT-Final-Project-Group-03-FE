import AuthForm from "../../components/AuthForm/AuthForm";

import { NavLink } from "react-router-dom";

const SigninPage = () => {
  return (
    <>
      <AuthForm />
      <NavLink to='/register'>Registration</NavLink>
    </>
  );
};

export default SigninPage;
