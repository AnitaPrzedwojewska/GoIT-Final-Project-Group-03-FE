import css from "./UserLogo.module.css";
import PropTypes from "prop-types";
import NameIcon from "../IconsSVG/NameIcon"; // Upewnij się, że ścieżka jest poprawna

const UserLogo = ({ user }) => {
  return (
    <>
      <div
        className={css.userImage}
        style={{
          backgroundImage: user.image ? `url(${user.image})` : "none",
        }}
      >
        {!user.image && (
          <NameIcon width={"20px"} height={"20px"} className={css.svgIcon} />
        )}
      </div>
      <div className={css.userName}>{user.name}</div>{" "}
      {/* Przywrócony user.name */}
    </>
  );
};

UserLogo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

UserLogo.defaultProps = {
  user: {
    name: "Alicja",
    image: "",
  },
};

export default UserLogo;
