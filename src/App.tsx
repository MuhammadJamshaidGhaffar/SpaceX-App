import React from "react";
import "./App.css";
import Launch from "./components/Launch";
import Launches from "./components/Launches";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/Not Found/indes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/launches" element={<Launches />} />
        <Route path="/" element={<Launches />} />
        <Route path="/launch/:id" element={<Launch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
