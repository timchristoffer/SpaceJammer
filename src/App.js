import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import Home from "./pages/HomePage";
import NoPage from "./pages/NoPage";

export default function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


