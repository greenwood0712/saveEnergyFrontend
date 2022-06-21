import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home'
import Network from './pages/Network';
import Privacy from './pages/Privacy';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/network' element={<Network />} />
        <Route path='/privacy' element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
