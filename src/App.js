import React from "react";
import {BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";

function App() {
  return (
    
      
      <BrowserRouter>
       <div>
          <header>
            <nav>
              <h1>L-NU Library</h1>
              <NavLink to="/" >Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/about">About</NavLink>
              
            </nav>
          </header>

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    
 
  );
}

export default App;
