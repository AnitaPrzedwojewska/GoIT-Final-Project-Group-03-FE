import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { login, register } from "../../redux/auth/auth.operations";

import css from "./AuthForm.module.css";

import routes from "../../constants/routes";
import ButonClassic from "../ButonClassic/ButonClassic";
import CheckPasswordIcon from "../IconsSVG/CheckPasswordIcon";
import CrossPasswordIcon from "../IconsSVG/CrossPasswordIcon";
import EmailIcon from "../IconsSVG/EmailIcon";
import NameIcon from "../IconsSVG/NameIcon";
import PasswordIcon from "../IconsSVG/PasswordIcon";

const AuthForm = () => {
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [isTouched, setIsTouched] = useState({
    name: false,
    email: false,
    password: false,
  });

  const location = useLocation();
  const registration = location.pathname === `/${routes.REGISTER}`;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (registration) {
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).then(() => {
        // Przekierowanie po udanej rejestracji
        navigate(`/${routes.LOGIN}`);
      });
    } else {
      // Logowanie użytkownika...
      dispatch(
        login({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).then(() => {
        // Przekierowanie po udanym logowaniu
        navigate(`/${routes.MAIN}`);
      });
    }

    form.reset();
  };

  const validateName = (e) => {
    setIsTouched((prev) => ({ ...prev, name: true }));
    const isValid = e.target.validity.valid;
    setNameValid(isValid);
  };

  const validateEmail = (e) => {
    setIsTouched((prev) => ({ ...prev, email: true }));
    const isValid = e.target.validity.valid;
    setEmailValid(isValid);
  };

  const validatePassword = (e) => {
    setIsTouched((prev) => ({ ...prev, password: true }));
    const isValid = e.target.validity.valid;
    setPasswordValid(isValid);
  };

  return (
    <div>
      <form
        className={`${css.form} ${registration ? css.registration : css.login}`}
        onSubmit={handleSubmit}
      >
        <div className={css.title}>
          {registration ? "Registration" : "Sign In"}
        </div>
        {registration && (
          <div className={css.inputBox}>
            <div className={css.icon}>
              <NameIcon
                strokeColor={
                  nameValid
                    ? "var(--green3)"
                    : isTouched.name
                    ? "var(--red"
                    : "var(--white1)"
                }
              />
            </div>
            <input
              className={`${css.input} ${
                !nameValid && isTouched.name
                  ? css.invalid
                  : nameValid
                  ? css.valid
                  : ""
              }`}
              type="text"
              name="name"
              id="name"
              pattern="^[A-Z][a-zA-Z]{2,}$"
              title="Name may contain only letter."
              required
              placeholder="Name"
              onInput={validateName}
            />
            {isTouched.name &&
              (nameValid ? (
                <CheckPasswordIcon className={css.validIcon} />
              ) : (
                <CrossPasswordIcon className={css.invalidIcon} />
              ))}
          </div>
        )}
        <div className={css.inputBox}>
          <div className={css.icon}>
            <EmailIcon
              strokeColor={
                emailValid
                  ? "var(--green3)"
                  : isTouched.email
                  ? "var(--red"
                  : "var(--white1)"
              }
            />
          </div>
          <input
            className={`${css.input} ${
              !emailValid && isTouched.email
                ? css.invalid
                : emailValid
                ? css.valid
                : ""
            }`}
            type="email"
            name="email"
            id="email"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="Please enter a valid email address"
            required
            placeholder="Email"
            onInput={validateEmail}
          />
          {isTouched.email &&
            (emailValid ? (
              <CheckPasswordIcon className={css.validIcon} />
            ) : (
              <CrossPasswordIcon className={css.invalidIcon} />
            ))}
        </div>
        <div className={css.inputBox}>
          <div className={css.icon}>
            <PasswordIcon
              strokeColor={
                passwordValid
                  ? "var(--green3)"
                  : isTouched.password
                  ? "var(--red"
                  : "var(--white1)"
              }
            />
          </div>

          <input
            className={`${css.input} ${
              !passwordValid && isTouched.password
                ? css.invalid
                : passwordValid
                ? css.valid
                : ""
            }`}
            type="password"
            id="password"
            pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            title="Password must be at least 8 characters long, only numbers and letters."
            required
            placeholder="Password"
            onInput={validatePassword}
          />
          {isTouched.password &&
            (passwordValid ? (
              <CheckPasswordIcon className={css.validIcon} />
            ) : (
              <CrossPasswordIcon className={css.invalidIcon} />
            ))}
        </div>
        {registration && isTouched.password && (
          <span
            className={`${css.validationMessage} ${
              passwordValid ? css.validText : css.invalidText
            }`}
          >
            {passwordValid ? "Password is secure." : "Enter a valid password."}
          </span>
        )}
        <div className={css.buttonBox}>
          <ButonClassic className={css.registerClassicButton}>
            {registration ? "Sign Up" : "Sign In"}
          </ButonClassic>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
