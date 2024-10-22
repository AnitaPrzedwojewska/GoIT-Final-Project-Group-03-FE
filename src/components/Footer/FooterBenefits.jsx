import css from "./Footer.module.css";

const FooterBenefits = () => {
  return (
    <ul className={css.benefits}>
      <li>Database of recipes that can be replenished </li>
      <li>Flexible search for desired and unwanted ingredients</li>
      <li>Ability to add your own recipes with photos</li>
      <li>Convenient and easy to use</li>
    </ul>
  );
};

export default FooterBenefits;
