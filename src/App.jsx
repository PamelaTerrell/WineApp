import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import WinePairing from './pages/WinePairing';
import WineHistory from './pages/WineHistory';
import About from './pages/About';
import './App.css'; 


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/pairing" element={<WinePairing />} />
          <Route path="/history" element={<WineHistory />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

