import React from 'react';

function SearchBar() {
  return (
    <div style={{ textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Search"
        style={{
          padding: '10px',
          width: '80%',
          maxWidth: '500px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
}

export default SearchBar;