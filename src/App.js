import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Books from "./pages/Books";
import Root from "./pages/Root";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root /> ,
    children: [
      { path: '/', element: <Home/>},
      { path: '/books', element: <Books/>},
    ],
  },
 
]);

function App() {
  return (
  <RouterProvider router={router}/>

  )
}

export default App;
