import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Books from "./pages/Books";




function App() {
  return (
    <>
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home />}/>
          <Route path="/books" element ={<Books/>}/>
        </Routes>
      </BrowserRouter>
    </div>
      
    </>
  
  )
}

export default App;
