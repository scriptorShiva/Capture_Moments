import React from "react";
import cameraman from "../images/cameraman.jpg";
//import styles.js
import {
  SLayout,
  SDescription,
  SImageWrapper,
  SHide,
} from "../StyledComponent/Styles";
//import Animation
import { motion } from "framer-motion";
import { titleAnimation, fade, imageAnimation } from "../Pages/animation";
//import wave animation
import Wave from "./Wave";

export default function AboutSection() {
  return (
    <>
      <SLayout>
        <SDescription>
          <div className="title">
            <SHide>
              <motion.h2 variants={titleAnimation}>We Work to make </motion.h2>
            </SHide>
            <SHide>
              <motion.h2 variants={titleAnimation}>
                your <span>dreams </span>comes
              </motion.h2>
            </SHide>
            <SHide>
              <motion.h2 variants={titleAnimation}>true </motion.h2>
            </SHide>
          </div>
          <motion.p variants={fade}>
            Contact us for any photography as we want to capture those moments
            you never want to forget.We have professionals with amazing skills
          </motion.p>
          <motion.button variants={fade}>Contact Us</motion.button>
        </SDescription>
        <SImageWrapper>
          <motion.img
            variants={imageAnimation}
            src={cameraman}
            alt="guy with camera"
          />
        </SImageWrapper>
        <Wave />
      </SLayout>
    </>
  );
}
