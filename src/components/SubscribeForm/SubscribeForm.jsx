import css from "./SubscribeForm.module.css";

import SubscribeFormTitle from './SubscribeFormTitle';
import EmailIcon from "../IconsSVG/EmailIcon";

const SubscribeForm = () => {
  return (
    <div className={css.subscribeForm}>
      <SubscribeFormTitle />
      <form className={css.form}>
        <div>
          <div className={css.inputBox}>
            <div className={css.icon}>
              <EmailIcon />
            </div>
            <input
              className={css.input}
              id='mainInput'
              type='text'
              placeholder='Enter your email address'
            />
          </div>
        </div>
        <button className={css.subscribeBtn}>Subscribe</button>
      </form>
    </div>
  );
};

export default SubscribeForm;
