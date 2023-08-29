import React from "react";
//import Global Styles
import GlobalStyle from "./StyledComponent/GlobalStyle";
//import pages
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import OurWork from "./Pages/OurWork";
import MoviesDetail from "./Pages/MoviesDetail";
//import Nav
import Nav from "./Component/Nav";
//import Route and Routes
import { Route, Routes, useLocation } from "react-router-dom";
//animation import
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/ourwork" element={<OurWork />} />
          <Route path="/ourwork/:id" element={<MoviesDetail />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
