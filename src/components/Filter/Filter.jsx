import React from "react";
import "./Filter.css";
import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => {
  return (
    <label className="Filter_label">
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
