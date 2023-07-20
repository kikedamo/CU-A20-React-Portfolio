import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';
import Navigation from "./components/JS/navbar"
import Footer from "./components/JS/footer"
import Home from "./pages/js/home"
import Portfolio from "./pages/js/portfolio"
import Contact from "./pages/js/contact"

function App() {
  return (
    <div>
      <div>
      </div>
      <Router>
      <Navigation/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
