import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contactus from "./components/Contactus";
import Support from "./components/Support";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<About />} path="/about" exact />
          <Route element={<Services />} path="/services" exact />
          <Route element={<Contactus />} path="/contact" exact />
          <Route element={<Support />} path="/support" exact />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
