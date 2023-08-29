import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
//The useNavigate() hook is introduced in the React Router v6 to replace the useHistory() hook. In the earlier version, the useHistory() hook accesses the React Router history object and navigates to the other routers using the push or replace methods. It helps to go to the specific URL, forward or backward pages. In the updated version, the React Router’s new navigation API provides a useNavigate() hook which is an imperative version to perform the navigation actions with better compatibility.
import moviesData from "../API/moviesData";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";

export default function MoviesDetail() {
  //useNavigate
  //   const navigate = useNavigate();
  //useLocation
  const location = useLocation();
  const url = location.pathname;
  //useState
  const [movies, setMovies] = useState(moviesData);
  const [movie, setMovie] = useState(null);
  //useEffect : runs when url or movies changes

  useEffect(() => {
    const setCurrentMovie = movies.filter((val) => val.url === url);
    setMovie(setCurrentMovie[0]);
  }, [movies, url]);

  return (
    //if movie available then renders

    <>
      {movie && (
        <SMovieWrapper
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <SAwards>
            {movie.awards.map((val) => (
              <Award title={val.title} description={val.description} />
            ))}
          </SAwards>
          <SSecondImage>
            <img src={movie.secondaryImg} alt="" />
          </SSecondImage>
        </SMovieWrapper>
      )}
    </>
  );
}
//Award Componets
const Award = ({ title, description }) => {
  return (
    <>
      <SAwardComponent>
        <h3>{title}</h3>
        <div className="line"></div>
        <p>{description}</p>
      </SAwardComponent>
    </>
  );
};

//styled components
const SMovieWrapper = styled(motion.div)``;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
const SAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 5rem;
  align-items: center;
  justify-content: space-around;

  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const SAwardComponent = styled.div`
  padding: 5rem;
`;
const SSecondImage = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
