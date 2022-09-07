import React from "react";
import "./App.css";
import Launch from "./components/Launch";
import Launches from "./components/Launches";
import { Routes, Route, Link } from "react-router-dom";

import { useLaunches_Query } from "./generated/graphql";

function App() {
  function getLaunchesDiv() {}

  return (
    <div className="App">
      <Routes>
        <Route path="/launches" element={<Launches />} />
        <Route path="/" element={<Launches />} />
        <Route path="/launch/:id" element={<Launch />} />
      </Routes>
    </div>
  );
}

export default App;
