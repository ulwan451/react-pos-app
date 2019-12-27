import React, { useState } from "react";
import "./Input.scss";

const Input = ({ value, name, type, label, onChange, className }) => {
  const [active, setActive] = useState(false);
  const fieldClassName = `field ${(active || value) && "active"} "locked"`;
  return (
    <>
      <div className={className || "oke mb-3"}>
        <div className={fieldClassName}>
          <input
            required
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={label}
            autoComplete="off"
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
          />
          <label>{label}</label>
        </div>
      </div>
    </>
  );
};

export default Input;
