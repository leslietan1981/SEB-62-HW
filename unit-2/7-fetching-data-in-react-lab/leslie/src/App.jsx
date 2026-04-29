import React, { useEffect, useState } from "react";
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import { useStarshipData } from "./services/starshipService";

function App() {
  const [starships, setStarships] = useStarshipData();
  const [searchDetails, setSearchDetails] = useState({});

  useEffect(() => {
    setStarships();
  }, []);

  return (
    <div className="container">
      <h1>Star Wars API</h1>
      <StarshipSearch setStarships={setStarships} setSearchDetails={setSearchDetails} />
      <StarshipList starships={starships} searchDetails={searchDetails} />
    </div>
  );
}

export default App;
