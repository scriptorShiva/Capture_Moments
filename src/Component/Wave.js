import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Wave() {
  return (
    <>
      <WaveSvg
        viewBox="0 0 1507 483"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 2 }}
          transition={{ duration: 1 }}
          d="M4 90.5C119.167 231 438.541 479 637.5 479C824 479 1038 39 1506.5 4"
          stroke="#23D997"
          stroke-width="6"
          opacity="0.4"
        />
      </WaveSvg>
    </>
  );
}

const WaveSvg = styled.svg`
  z-index: 1;
  position: absolute;
  left: 0;
`;

//Note that the pathLength MotionValue transforms the motion.path’s opacity. The checkmark quickly fades in at the beginning of the pathLength animation.
//The offset-path CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.
