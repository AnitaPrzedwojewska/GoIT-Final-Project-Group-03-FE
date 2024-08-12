import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

// functions
// import useUser from "../../hooks/useUser";
import useAuth from "../../hooks/useAuth";
import { setModalUser } from "../../redux/app/app.slices";

// components
import NameIcon from "../IconsSVG/NameIcon";

// styles
import css from "./UserLogo.module.css";

const UserLogo = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  console.log("user: ", user);

  const openModalUser = () => {
    dispatch(setModalUser(true));
  };

  return (
    <div className={css.container}>
      <NavLink
        onClick={openModalUser}
        className={css.userImage}
        style={{
          backgroundImage: user && user.avatar ? `url(${user.avatar})` : "none",
        }}
      >
        {!user?.avatar && (
          <NameIcon width={"20px"} height={"20px"} className={css.svgIcon} />
        )}
      </NavLink>
      <div className={css.userName}>{user ? user.name : "Zaloguj się"}</div>
    </div>
  );
};

export default UserLogo;
