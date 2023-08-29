import React from "react";
//import images
import racer from "../images/racer.jpg";
import rise from "../images/rise.jpg";
import yoga from "../images/yoga.jpg";
//import react router dom
import { NavLink } from "react-router-dom";
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  imageAnimation,
  fade,
  lineAnimation,
  RainbowAnimate,
  RainbowAnimateContainer,
} from "./animation";

export default function OurWork() {
  return (
    <>
      <SWorkWrapper
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        style={{ background: "#fff" }}
      >
        {/* Rainbow animation */}
        <motion.div variants={RainbowAnimateContainer}>
          <Frame1 variants={RainbowAnimate}></Frame1>
          <Frame2 variants={RainbowAnimate}></Frame2>
          <Frame3 variants={RainbowAnimate}></Frame3>
          <Frame4 variants={RainbowAnimate}></Frame4>
        </motion.div>

        <SMovie>
          <motion.p variants={fade} className="movie-title">
            Rise Like Sun
          </motion.p>
          <motion.div variants={lineAnimation} className="line"></motion.div>

          <NavLink to="/ourwork/rise">
            <Hide>
              <motion.img variants={imageAnimation} src={rise} alt="sunrise" />
            </Hide>
          </NavLink>
        </SMovie>
        <SMovie>
          <p className="movie-title">Racer</p>
          <div className="line"></div>

          <NavLink to="/ourwork/racer">
            <img src={racer} alt="car race" />
          </NavLink>
        </SMovie>
        <SMovie>
          <p className="movie-title">Yoga</p>
          <div className="line"></div>

          <NavLink to="/ourwork/yoga">
            <img src={yoga} alt="yog" />
          </NavLink>
        </SMovie>
      </SWorkWrapper>
    </>
  );
}

//styled components
const SWorkWrapper = styled(motion.div)`
  overflow: hidden;
  padding: 5rem 10rem;
`;

const SMovie = styled.div`
  padding-bottom: 10rem;

  .movie-title {
    font-size: 2.2rem;
    font-weight: bold;
  }
  .line {
    height: 0.5rem;
    background: #23d977;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
  }
  .movie-title {
    color: black;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//rainbow animations divs
const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fffebf;
  z-index: 10;
`;
const Frame2 = styled(Frame1)`
  background-color: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background-color: #8eff80;
`;
