import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
//import animation
import { motion } from "framer-motion";
import { NavbarAnimation } from "../Pages/animation";
//import useLocation
import { useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <SNavWrapper>
        <h1>
          <a className="logo" href="#">
            Capture
          </a>
        </h1>
        <ul>
          <li>
            <NavLink to="/"> About Us</NavLink>
            <SNavline
              variants={NavbarAnimation}
              initial="hidden"
              animate={`${path === "/" ? "show" : ""}`}
            ></SNavline>
          </li>

          <li>
            <NavLink to="/ourwork"> Our Work</NavLink>
            <SNavline
              variants={NavbarAnimation}
              initial="hidden"
              animate={`${path === "/ourwork" ? "show" : ""}`}
            ></SNavline>
          </li>

          <li>
            <NavLink to="/contactUs">Contact Us</NavLink>
            <SNavline
              variants={NavbarAnimation}
              initial="hidden"
              animate={`${path === "/contactUs" ? "show" : ""}`}
            ></SNavline>
          </li>
        </ul>
      </SNavWrapper>
    </>
  );
}
//styled components

const SNavWrapper = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  position: fixed;
  padding: 1rem 10rem;
  z-index: 20;

  background-color: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4rem;
  }
  .logo {
    font-size: 2rem;
    font-family: cursive;
    font-weight: ligher;
  }
  //for line animation
  li {
    position: relative;
  }
`;
const SNavline = styled(motion.div)`
  position: absolute;
  margin-top: 5px;
  width: 0%;
  height: 0.3rem;
  border-radius: 10px;
  background-color: rgb(35, 217, 151);
`;
