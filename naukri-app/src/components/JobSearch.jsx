import React, { useState } from 'react';
import "./JobSearch.css"
function JobSearch({ setSearchQuery }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(query);
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for jobs..."
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

export default JobSearch;
