import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar";
import Masthead from "./Masthead";
import Portfolio from "./portfolioSection";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Copyright from "./Copyright";
import React, { useState } from "react";
import State from "./State";

function App() {
  return (
    <div>
      <State />
      {/* <Navbar />
      <Masthead />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <Copyright /> */}
    </div>
  );
}

export default App;
