import React from "react";
import Button from "./Button";

const Item = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
        padding: "10px",
        border: "solid 2px black",
        background: "pink",
        marginTop: "10px",
      }}
    >
      <div style={{ flex: 1 }}>{props.item}</div>
      <div style={{ flex: 1 }}>${props.price}</div>
      <div style={{ flex: 1 }}>{props.date}</div>
      <Button
        type="button"
        onClick={props.updateDataItem}
        style={{
          padding: "8px 16px",
          border: "solid 2px black",
          background: "#ff6b6b",
          color: "white",
        }}
      >
        Update
      </Button>
      <Button
        type="button"
        onClick={props.deleteDataItem}
        style={{
          padding: "8px 16px",
          border: "solid 2px black",
          background: "#ff6b6b",
          color: "white",
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default Item;
