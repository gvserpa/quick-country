import { memo, useState } from "react";
import "./index.css";

const Search = ({ handleSubmit, setCountry }) => {
  return (
    <div className="Search">
      <div className="search-content">
        <div className="search-content-title">
          <h1>Explore Countries Around the World 🌍</h1>
        </div>
        <div className="search-align">
          <input
            placeholder="Search for a country..."
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default memo(Search);
