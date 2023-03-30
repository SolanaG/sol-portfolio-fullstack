import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import SkillsTools from "./components/skillsAndTolls/SkillsTools";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Work />
      <Experience />
      <SkillsTools />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
