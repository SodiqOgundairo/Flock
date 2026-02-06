import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ComponentShowcase from "./pages/ComponentShowcase";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<ComponentShowcase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
