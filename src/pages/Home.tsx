import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CallToAction from "../components/CallToAction";
import Features from "../components/Features";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;