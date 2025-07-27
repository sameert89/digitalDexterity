import "../stylesheets/Home.css";

import { motion } from "framer-motion";

import "../assets/fonts/consola.ttf";
import "../assets/fonts/os_condensed.ttf";

import ContactSection from "../components/sections/ContactsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";
import AboutSection from "../components/sections/AboutSection";

function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </motion.div>
  );
}

export default Portfolio;
