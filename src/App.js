import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Network from "./pages/Network";
import Privacy from "./pages/Privacy";
import Article from "./pages/blogs/Article";
import Index from "./pages/blogs";
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/network" element={<Network />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/blog" element={<Index />} />
          <Route path="/blog/article" element={<Article />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
