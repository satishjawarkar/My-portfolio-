import React, { useEffect } from "react";
import AOS from "aos";

import "./App.css";
import { NavbarsComponent } from "./component/NavbarsComponent";
import HeroSection from "./component/HeroSection";
import SkillsSection from "./component/SkillsSection";
import ProjectsSection from "./component/ProjectsSection";
import ContactSection from "./component/ContactSection";
import AboutSection from "./component/AboutSection";
import Footer from "./component/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <NavbarsComponent />

      <main style={{ marginTop: "86px" }}>
        <HeroSection className="mt-16" />
        <SkillsSection className="mt-16" />
        <ProjectsSection className="mt-16" />
        <ContactSection className="mt-16" />
        <AboutSection className="mt-16" />
        <Footer className="mt-16" />
      </main>
    </>
  );
}

export default App;
