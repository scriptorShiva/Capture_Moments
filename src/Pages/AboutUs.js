import React from "react";
//page components
import AboutSection from "../Component/AboutSection";
import ServicesSection from "../Component/ServicesSection";
import FaqSection from "../Component/FaqSection";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";

export default function AboutUs() {
  return (
    <>
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <AboutSection />
        <ServicesSection />
        <FaqSection />
      </motion.div>
    </>
  );
}
