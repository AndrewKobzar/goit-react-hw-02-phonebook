import PropTypes from "prop-types";

const selectStyles = {
  display: "block",
  width: "150px",
  margin: "0 auto",
  fontSize: "24px",
  marginTop: "12px",
};

const PrioritySelect = ({ filter, changeFilter }) => {
  return (
    <input
      name="priority"
      style={selectStyles}
      value={filter}
      onChange={changeFilter}
    />
  );
};
PrioritySelect.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default PrioritySelect;
