import { useState } from "react";
import "./App.css";
import Projects from "./Components/Projects";
import { Routes, Route } from "react-router-dom";
import DummyComponent from "./Components/DummyComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/table" element={<DummyComponent />} />
      </Routes>
    </div>
  );
}

export default App;
