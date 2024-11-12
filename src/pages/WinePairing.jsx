import React, { useState } from 'react';
import axios from 'axios';

const WinePairing = () => {
  const [food, setFood] = useState('');
  const [wine, setWine] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFoodChange = (event) => {
    setFood(event.target.value);
  };

  const fetchWinePairing = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/pairing/${food}`);
      setWine(response.data.winePairing);
      setError(null);
    } catch (err) {
      setError("No pairing found for this food item.");
      setWine('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Find the Perfect Wine Pairing</h2>
      <input 
        type="text" 
        value={food} 
        onChange={handleFoodChange} 
        placeholder="Enter food (e.g., beef, chicken)" 
      />
      <button onClick={fetchWinePairing} disabled={loading}>Get Pairing</button>
      {loading && <p>Loading...</p>}
      {wine && <p>The best wine for {food} is: {wine}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default WinePairing;
