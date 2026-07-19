import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import About from "./Components/About";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </>
  );
};

export default page;
