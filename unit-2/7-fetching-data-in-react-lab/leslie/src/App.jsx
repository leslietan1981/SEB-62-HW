import React, { useState } from "react";
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import { getStarshipsData } from "./services/starshipService";

function App() {
  const [starships, setStarships] = useState([]);

  const allStarships = getStarshipsData();
  return (
    <div className="container">
      <h1>Star Wars API</h1>
      <StarshipSearch />
      <StarshipList />
      {JSON.stringify(allStarships.data)}
    </div>
  );
}

export default App;
