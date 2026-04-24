import React, { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  const [data, setData] = useState([]);
  const handleAddData = (newData) => {
    setData((prevState) => [...prevState, newData]);
  };

  const handleDeleteData = (idx) => {
    setData((prevState) => prevState.toSpliced(idx, 1));
  };

  return (
    <div>
      {JSON.stringify(data)}
      <Form addDataForm={handleAddData} />
      <Display dataDisplay={data} deleteDataDisplay={handleDeleteData} />
    </div>
  );
}

export default App;
