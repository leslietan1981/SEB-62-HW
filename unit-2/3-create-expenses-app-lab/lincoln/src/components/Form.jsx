import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Label from "./Label";

const Form = (props) => {
  const [formData, setFormData] = useState({ item: "", price: "", date: "" });

  const [updateData, setUpdateData] = useState([]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const currentDate = new Date().toISOString().split("T")[0];
    const dataToSubmit = {
      ...formData,
      date: formData.date || currentDate,
    };
    props.addDataForm(dataToSubmit);
    setFormData({ item: "", price: "", date: "" });
  };

  return (
    <div
      style={{
        margin: "20px",
        maxWidth: "900px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          gap: "15px",
        }}
      >
        <div style={{ minWidth: "100px" }}>
          <Label>Item</Label>
        </div>
        <Input
          style={{ flex: 1 }}
          type="text"
          name="item"
          handleInputChange={handleInputChange}
          value={formData.item}
          placeholder="Type item..."
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          gap: "15px",
        }}
      >
        <div style={{ minWidth: "100px" }}>
          <Label>Price</Label>
        </div>
        <Input
          style={{ flex: 1 }}
          type="text"
          name="price"
          handleInputChange={handleInputChange}
          value={formData.price}
          placeholder="Type price..."
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          gap: "15px",
        }}
      >
        <div style={{ minWidth: "100px" }}>
          <Label>Date</Label>
        </div>
        <Input
          style={{ flex: 1 }}
          type="date"
          name="date"
          handleInputChange={handleInputChange}
          value={formData.date}
          placeholder="Type date..."
        />
      </div>
      <Button
        type="submit"
        onClick={handleSubmit}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          border: "solid 2px black",
          background: "lightblue",
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default Form;
