import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      className={props.className}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      style={{
        border: "solid 3px black",
        width: "100%",
        padding: "8px",
        ...(props.style || {}),
      }}
      onChange={props.handleInputChange}
    />
  );
};

export default Input;
