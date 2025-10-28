import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* All other routes will redirect to home for now */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;