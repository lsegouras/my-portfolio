import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Goals from "./Goals";
import WhyHireMe from "./WhyHireMe";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Menu />
      <Header />
      <About />
      <Goals />
      <WhyHireMe />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
