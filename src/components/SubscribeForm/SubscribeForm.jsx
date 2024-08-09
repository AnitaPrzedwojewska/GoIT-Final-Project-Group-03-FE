// npm packages
import Notiflix from "notiflix";

// functions
import useUser from '../../hooks/useUser';
import subscribeNewsletter from '../../api/others/subscribeNewsletter';

// components
import SubscribeFormTitle from './SubscribeFormTitle';
import EmailIcon from "../IconsSVG/EmailIcon";

// styles
import css from "./SubscribeForm.module.css";

const SubscribeForm = () => {

  const {email} = useUser();
  console.log('SubscribeForm - email: ', email);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      subscribeNewsletter(email);
      Notiflix.Notify.success("You have subscribed to the newsletter.");
    } catch (error) {
      console.log(error)
      Notiflix.Notify.failure("Something is wrong. Failed subscription.");
    }
    form.reset();
  }

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
              id='mainInput'
              type='text'
              placeholder={email}
              disabled='true'
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
