import css from "./Footer.module.css";

import FooterTitle from "./FooterTitle";
import FooterBenefits from "./FooterBenefits";
import Nav from "../Nav/Nav";
import SubscribeForm from "../SubscribeForm/SubscribeForm";
import FollowUs from "../FollowUs/FollowUs";
import FooterCopyrights from "./FooterCopyrights";

const Footer = () => {
  return (
    <div>
      <div className={css.footer}>
        <div className={css.container}>
          <div className={css.footerBox}>
            <div className={css.sYumNavSub}>
              <div className={css.sYumNav}>
                <div className={css.soYummyBlock}>
                  <FooterTitle />
                  <FooterBenefits />
                </div>
                <Nav />
              </div>
              <SubscribeForm />
            </div>
            <div className={css.followUs}>
              <FollowUs />
            </div>
          </div>
        </div>
      </div>
      <div className={css.copyright}>
        <div className={css.container}>
          <FooterCopyrights />
        </div>
      </div>
    </div>
  );
};

export default Footer;
