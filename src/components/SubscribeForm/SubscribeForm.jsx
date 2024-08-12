// npm packages
import { useDispatch } from "react-redux";
import Notiflix from "notiflix";

// functions
// import useUser from '../../hooks/useUser';
import useAuth from '../../hooks/useAuth'
import subscribeNewsletter from '../../api/others/subscribeNewsletter';
import { get } from '../../redux/user/user.operations';

// components
import SubscribeFormTitle from './SubscribeFormTitle';
import EmailIcon from "../IconsSVG/EmailIcon";

// styles
import css from "./SubscribeForm.module.css";

const SubscribeForm = () => {

  const dispatch = useDispatch();

  const {user} = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (user.subscribe) {
      Notiflix.Notify.warning("You have already subscribed.");
    } else {
      try {
        const response = await subscribeNewsletter(user.email);
        if (response.status !== 200) {
          Notiflix.Notify.failure("Something is wrong. Failed subscription.");
        } else {
          // dispatch(get());
          Notiflix.Notify.success("Subscription completed successfully.");
        }
        // dispatch(get());
      } catch (error) {
        console.log(error)
        Notiflix.Notify.failure("Something is wrong. Failed subscription.");
      }
    }
    form.reset();
  }

  const handleClick = (event) => {
    event.target.value = user.email;
  };

  return (
    <div className={css.subscribeForm}>
      <SubscribeFormTitle />
      <form className={css.form} onSubmit={handleSubmit}>
        <div>
          <div className={css.inputBox}>
            <div className={css.icon}>
              <EmailIcon />
            </div>
            <input
              className={css.input}
              name='email'
              id='email'
              type='text'
              placeholder='Enter your email address'
              readOnly
              onClick={handleClick}
            />
          </div>
        </div>
        <button type='submit' className={css.subscribeBtn}>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
