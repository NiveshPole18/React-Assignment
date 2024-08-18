import React from 'react';

function Card({ title, description }) {
  return (
    <div style={{ 
        backgroundColor: '#f1f1f1',
        padding: '20px',
        borderRadius: '10px',
        margin: '10px',
        width: '300px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{title}</h3>
      <p style={{ fontSize: '14px', color: '#555' }}>{description}</p>
    </div>
  );
}

export default Card;