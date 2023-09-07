import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesktopView from "./pages/home/desktop.jsx";
import AboutMe from "./pages/about/about.page.jsx";
import Projects from "./pages/projects/projects.page.jsx";
import ContactMe from "./pages/contact/contact.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DesktopView />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
