import React from "react";

const Label = (props) => {
  return (
    <label style={{ border: "solid 3px green", width: "100%" }}>
      {props.children}
    </label>
  );
};

export default Label;
