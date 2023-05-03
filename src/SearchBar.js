import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSearch(event) {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  }

  return (
    <div>
        <input id="SearchBar" type="text" value={searchQuery} onChange={handleSearch} placeholder='Search by type e.g. STUDIO' />
    </div>
  );
}

export default SearchBar;