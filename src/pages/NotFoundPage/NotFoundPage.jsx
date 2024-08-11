import css from "./NotFoundPage.module.css";
import pnfLogo from "/images/404.png";

const NotFoundPage = () => {
    return (
        <>
            <section className={css.section}>
                <img src={pnfLogo} className={css.notifationLogo} />
                <h2 className={css.notifationTitle}>We are sorry,</h2>
                <p className={css.notifationDescription}>
                    but the page you were looking for can’t be found..
                </p>
            </section>
        </>
    );
};

export default NotFoundPage;
