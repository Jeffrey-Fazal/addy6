import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import Story from './pages/Story';

function App() {
  return (
    <Router>
    <div className="pt-20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/story" element={<Story />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
