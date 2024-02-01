import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Books from "./pages/Books";
import Services from "./pages/Services"
import LibraryBranches from "./pages/LibraryBranches";
import About from "./pages/About";
import Error from "./pages/Error"




function App() {
  return (
    <>
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home />}/>
          <Route path="/books" element ={<Books/>}/>
          <Route path="/services" element ={<Services/>}/>
          <Route path="/braches" element ={<LibraryBranches/>}/>
          <Route path="/about" element ={<About/>}/>
          <Route path="*" element ={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
      
    </>
  
  )
}

export default App;
