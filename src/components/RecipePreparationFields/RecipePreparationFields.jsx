// import css from "./RecipePreparationFields.module.css";
import PropTypes from "prop-types";

const RecipePreparationFields = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, instructions: e.target.value });
  };

  return (
    <>
      <div>
        <h2>Recipe Preparation</h2>
        <textarea
          name="instructions"
          placeholder="Enter recipe"
          value={formData.instructions}
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
};

RecipePreparationFields.propTypes = {
  formData: PropTypes.shape({
    instructions: PropTypes.string.isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default RecipePreparationFields;
