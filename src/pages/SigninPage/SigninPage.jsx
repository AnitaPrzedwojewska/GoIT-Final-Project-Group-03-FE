import { NavLink } from "react-router-dom";
import css from "./SigninPage.module.css";
import registerLogo from "../../../public/images/register.png";

const SigninPage = () => {
    return (
        <>
            <section className={css.registerform}>
                <div style="logo">
                    <img src={registerLogo} className={css.registerLogo} />
                </div>
                <div className={css.mainForm}>
                    <h3>Registration</h3>
                    <form action="">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                        />
                        <input
                            type="text"
                            id="first"
                            name="first"
                            placeholder="Email"
                            required
                        />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                        />

                        <div>
                            <button type="submit">Sign up</button>
                        </div>
                    </form>
                    <NavLink to="/register">Registration</NavLink>
                </div>
            </section>
        </>
    );
};

export default SigninPage;
