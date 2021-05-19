import React from "react";
import "./FormInput.css";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="formRow">
      {label && <label>{label}</label>}

      <input
        className="formInput"
        onChange={handleChange}
        {...otherProps}
        required
      />
    </div>
  );
};

export default FormInput;
