import { useLocation } from "react-router-dom";

import css from "./AuthForm.module.css";

import NameIcon from "../IconsSVG/NameIcon";
import EmailIcon from "../IconsSVG/EmailIcon";
import PasswordIcon from "../IconsSVG/PasswordIcon";

const AuthForm = () => {
  const location = useLocation();
  const registration = location.pathname === '/register';

  return (
    <div>
      <form className={css.form}>
        {registration && (
          <div className={css.inputBox}>
            <div className={css.icon}>
              <NameIcon />
            </div>
            <input className={css.input} id='name' placeholder='Name' />
          </div>
        )}
        <div className={css.inputBox}>
          <div className={css.icon}>
            <EmailIcon />
          </div>
          <input className={css.input} id='login' placeholder='Email' />
        </div>
        <div className={css.inputBox}>
          <div className={css.icon}>
            <PasswordIcon />
          </div>
          <input className={css.input} id='password' placeholder='Password' />
        </div>
        <button className={css.signupBtn}>Sign up</button>
      </form>
    </div>
  );
};

export default AuthForm;
