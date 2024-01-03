import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileView from "./pages/home/mobile/mobileview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MobileView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
