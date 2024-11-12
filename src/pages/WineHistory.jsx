import React, { useState, useEffect } from 'react';

const WineHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('wineHistory')) || [];
    setHistory(savedHistory);
  }, []);

  return (
    <div>
      <h2>Wine Pairing History</h2>
      {history.length === 0 ? (
        <p>No pairings yet.</p>
      ) : (
        <ul>
          {history.map((entry, index) => (
            <li key={index}>{entry.food}: {entry.wine}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WineHistory;
