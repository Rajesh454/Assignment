import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// Import other components as needed

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* Other routes */}
        <Route path="/data" element={<DataDisplay />} />
      </Routes>
    </BrowserRouter>
  );
}
