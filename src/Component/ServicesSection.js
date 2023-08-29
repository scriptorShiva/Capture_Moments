import React from "react";
//import main image
import cameraman2 from "../images/cameraman2.jpg";
//importing icons
import money from "../images/money.png";
import clock from "../images/clock.png";
import camera from "../images/camera.png";
import team from "../images/team.png";
//import Style
import styled from "styled-components";
//import Style.js
import {
  SLayout,
  SDescription,
  SImageWrapper,
} from "../StyledComponent/Styles";

export default function ServicesSection() {
  return (
    <>
      <SLayoutServices>
        <SImageWrapper>
          <img src={cameraman2} alt="our 2nd cameraman" />
        </SImageWrapper>
        <SDescription>
          <div className="title">
            <h2>
              High <span>Quality</span> Services
            </h2>
          </div>
          {/* card Container */}
          <SCardsContainer>
            <SCard>
              <div className="icons">
                <img src={money} alt="money icon" />
                <h3>Affordable</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                recusandae?
              </p>
            </SCard>

            <SCard>
              <div className="icons">
                <img src={clock} alt="clock icon" />
                <h3>Efficient</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                recusandae?
              </p>
            </SCard>
            <SCard>
              <div className="icons">
                <img src={camera} alt="camrera icon" />
                <h3>Pro Grade Gear</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                recusandae?
              </p>
            </SCard>
            <SCard>
              <div className="icons">
                <img src={team} alt="team icon" />
                <h3>TeamWork</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                recusandae?
              </p>
            </SCard>
          </SCardsContainer>
          {/* card COntainer ends */}
        </SDescription>
      </SLayoutServices>
    </>
  );
}

//styled components
const SLayoutServices = styled(SLayout)`
  p {
    padding: 1rem 0;
  }
  gap: 10%;
`;
const SCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 5rem;
  .icons {
    img {
      width: 3rem;
    }
  }
`;
const SCard = styled.div`
  width: 20vw;
  padding: 1rem 0;
`;
