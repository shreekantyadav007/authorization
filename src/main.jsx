// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Register from "./Register";
import Login from "./Login";
import Protected from "./Protected";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/protected">Protected</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={<Protected />} />
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
