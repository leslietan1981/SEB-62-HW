import React from "react";
import LanguageList from "./components/LanguageList";
import PeopleList from "./components/PeopleList";

function App() {
  return (
    <div className="container">
      <h1 className="row">Languages Register</h1>
      <LanguageList />
      <PeopleList />
    </div>
  );
}

export default App;
