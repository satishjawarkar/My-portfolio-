import React from "react";

import NavbarsComponent from "./component/NavbarsComponent";
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import SkillsSection from "./component/SkillsSection";
import ExperienceSection from "./component/ExperienceSection";
import ProjectsSection from "./component/ProjectsSection";
// import TestimonialsSection from "./component/TestimonialsSection";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  return (
    <div id="root">
      <NavbarsComponent />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
