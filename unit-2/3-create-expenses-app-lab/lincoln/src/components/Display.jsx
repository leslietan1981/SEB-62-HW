import React from "react";
import Item from "./Item";

const Display = (props) => {
  return (
    <div className="display-container" style={{ margin: "30px" }}>
      {props.dataDisplay.map((object, idx) => (
        <Item
          item={object.item}
          price={object.price}
          date={object.date}
          key={idx}
          updateDataItem={() => props.updateDataDisplay(object)}
          deleteDataItem={() => props.deleteDataDisplay(idx)}
        />
      ))}
    </div>
  );
};

export default Display;
