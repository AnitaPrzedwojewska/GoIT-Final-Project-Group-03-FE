import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { register, login } from "../../redux/auth/auth.operations";

import css from "./AuthForm.module.css";

import NameIcon from "../IconsSVG/NameIcon";
import EmailIcon from "../IconsSVG/EmailIcon";
import PasswordIcon from "../IconsSVG/PasswordIcon";

const AuthForm = () => {
  const location = useLocation();
  const registration = location.pathname === '/register';

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (registration) {
      // kod do sprawdzania poprawności wprowadzonych danych
      // a jeśli wszystko w porządku to do dzieła
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      // jeśli nie wszystko z poprawnością danych było ok, to obsługa błędu
    }
    else {
      // kod do sprawdzania poprawności wprowadzonych danych
      // a jeśli wszystko w porządku to do dzieła
      dispatch(
        login({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      // jeśli nie wszystko z poprawnością danych było ok, to obsługa błędu
    }
    form.reset();
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit} >
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
          <input className={css.input} id='email' placeholder='Email' />
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
