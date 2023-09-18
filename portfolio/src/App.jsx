import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import homePage from "./pages/home/home.page";

import "./App.css";
import HomePage from "./pages/home/home.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
