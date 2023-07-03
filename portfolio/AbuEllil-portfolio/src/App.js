import React from "react";

import "./style/style.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications ";
import ToTopButton from "./components/ToTopButton"

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Certifications />
      <Contact />
      <Footer />
      <ToTopButton />
    </>
  );}

export default App