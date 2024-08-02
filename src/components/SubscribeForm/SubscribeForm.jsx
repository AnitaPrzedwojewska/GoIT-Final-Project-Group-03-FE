import css from "./SubscribeForm.module.css";

// import Button from "../BtnClassic/btnClassic";
import LetterIcon from "../IconsSVG/LetterIcon";

const SubscribeForm = () => {
  return (
    <div className={css.subscribeForm}>
      <div className={css.inviteBlock}>
        <h5 className={css.inviteTitle}>Subscribe to our Newsletter</h5>
        <p className={css.inviteText}>
          Subscribe up to our newsletter. Be in touch with <br />
          latest news and special offers, etc.
        </p>
      </div>
      <form className={css.form}>
        <div>
          <input
            className={css.input}
            id='mainInput'
            type='text'
            placeholder='Enter your email address'
          />
          <LetterIcon />
        </div>
        <button className={css.button}>Subscribe</button>
      </form>
    </div>
  );
};

export default SubscribeForm;
