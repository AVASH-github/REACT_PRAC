// Form.jsx
import React from "react";

function Form({ onSubmit, children, style }) {
  return (
    <form
      onSubmit={onSubmit}
      style={{
        padding: "40px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        maxWidth: "500px",
        margin: "20px auto",
        backgroundColor: "#f9f9f9",
        ...style,
      }}
    >
      {children}
    </form>
  );
}

export default Form;
