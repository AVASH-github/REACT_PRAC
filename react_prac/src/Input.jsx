// Input.jsx
import React from "react";

function Input({ label, type, name, value, onChange, placeholder, options }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      {label && <label style={{ display: "block", marginBottom: "5px" }}>{label}</label>}
      {type === "radio" && options ? (
        options.map((option, index) => (
          <label key={index} style={{ marginRight: "10px" }}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              style={{ marginRight: "5px" }}
            />
            {option.label}
          </label>
        ))
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{
            padding: "10px",
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      )}
    </div>
  );
}

export default Input;
