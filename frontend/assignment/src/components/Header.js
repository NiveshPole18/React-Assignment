import React from 'react';

function Header() {
  return (
    <header style={{ backgroundColor: '#000', padding: '10px 20px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontSize: '18px' }}>Abstract | Help Center</div>
      <button style={{ backgroundColor: '#333', border: 'none', padding: '10px 20px', color: '#fff', borderRadius: '5px' }}>Submit a request</button>
    </header>
  );
}

export default Header;