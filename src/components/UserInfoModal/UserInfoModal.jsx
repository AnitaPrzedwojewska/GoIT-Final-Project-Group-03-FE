import { useState } from "react";
import css from "./UserInfoModal.module.css";
import PropTypes from "prop-types";
import ButonClassic from "../ButonClassic/ButonClassic";
import NameIcon from "../IconsSVG/NameIcon";

const UserInfoModal = ({ onClose, user }) => {
  const [name, setName] = useState(user.name);
  const [image, setImage] = useState(user.image);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    console.log("Changes saved:", { name, image });
    onClose();
  };

  return (
    <div className={css.modalOverlay} onClick={onClose}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={css.container}>
          <div className={css.imageUpload}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="image-upload"
            />
            <label htmlFor="image-upload" className={css.addButton}>
              +
            </label>

            {image ? (
              <>
                <img
                  src={image}
                  alt="Profile Preview"
                  className={css.imagePreview}
                />
              </>
            ) : (
              <label htmlFor="image-upload">
                <NameIcon
                  width={"47px"}
                  height={"47px"}
                  className={css.svgIcon}
                />
              </label>
            )}
          </div>

          <label className={css.label}>
            <div className={css.icon}>
              <NameIcon className={css.inputIcon} />
            </div>
            <input
              className={css.input}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <ButonClassic className={css.buttonSave} onClick={handleSaveChanges}>
            Save Changes
          </ButonClassic>
        </div>
      </div>
    </div>
  );
};

UserInfoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserInfoModal;
