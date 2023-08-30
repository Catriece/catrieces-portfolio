import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/home.page.jsx";
import AboutMe from "./pages/aboutpage/aboutme.page.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
