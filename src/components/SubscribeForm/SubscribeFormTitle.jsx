import css from './SubscribeForm.module.css'

const SubscribeFormTitle = () => {
  return (
    <div className={css.inviteBlock}>
      <h5 className={css.inviteTitle}>Subscribe to our Newsletter</h5>
      <p className={css.inviteText}>
        Subscribe up to our newsletter. Be in touch with <br />
        latest news and special offers, etc.
      </p>
    </div>
  );
}

export default SubscribeFormTitle;