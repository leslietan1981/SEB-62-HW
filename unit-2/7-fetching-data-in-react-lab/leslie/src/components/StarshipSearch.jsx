import React from "react";
import styles from "./StarshipSearch.module.css";

const StarshipSearch = () => {
  return (
    <div className={`container ${styles.search}`}>
      <h2 className="row">Search</h2>
      <div className={`row ${styles.baseline}`}>
        <div className={`col-md-2 ${styles["padding-left-0"]}`}>Search Term:</div>
        <div className="col-md-8">
          <input type="text" name="searchBy" placeholder="starship name" />
          <button>Search</button>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default StarshipSearch;
