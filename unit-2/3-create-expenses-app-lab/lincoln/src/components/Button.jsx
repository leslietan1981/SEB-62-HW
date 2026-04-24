import React from "react";

// Reusable Button component partial codes
const Button = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default Button;
