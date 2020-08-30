import React, { useState } from "react";

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    onSearchSubmit(term);
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label htmlFor="videoSearch">Video Search:</label>
          <input type="text" id="videoSearch" value={term} onChange={e => setTerm(e.target.value)} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
