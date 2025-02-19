import { useState } from "react";
import "./App.css";
import Home from "./components/Home";  // Utilise "./" au lieu de "../"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
