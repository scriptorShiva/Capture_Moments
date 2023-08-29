import React from "react";
import styled from "styled-components";
import { SLayout } from "../StyledComponent/Styles";

export default function FaqSection() {
  return (
    <>
      <FaqLayout>
        <div className="faq-title">
          <h1>
            Any Questions? <span>FAQ</span>
          </h1>
        </div>
        <div className="faq-data">
          <div className="faq-row-1">
            <h4>How Do I start?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi porro ducimus unde. Aliquam, ipsa? Voluptates nam
              similique quod labore, deleniti eius magni commodi repellat
              reprehenderit nihil officia aliquam blanditiis. Adipisci.
            </p>
          </div>
          <div className="faq-line"></div>
          <div className="faq-row-2">
            <h4>What Product do you offer?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi porro ducimus unde. Aliquam, ipsa? Voluptates nam
              similique quod labore, deleniti eius magni commodi repellat
              reprehenderit nihil officia aliquam blanditiis. Adipisci.
            </p>
          </div>
          <div className="faq-line"></div>
          <div className="faq-row-3">
            <h4>Different Payment Methods?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi porro ducimus unde. Aliquam, ipsa? Voluptates nam
              similique quod labore, deleniti eius magni commodi repellat
              reprehenderit nihil officia aliquam blanditiis. Adipisci.
            </p>
          </div>
          <div className="faq-line"></div>
          <div className="faq-row-4">
            <h4>Daily schedule?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi porro ducimus unde. Aliquam, ipsa? Voluptates nam
              similique quod labore, deleniti eius magni commodi repellat
              reprehenderit nihil officia aliquam blanditiis. Adipisci.
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </FaqLayout>
    </>
  );
}

//styled components
const FaqLayout = styled(SLayout)`
  display: block;
  p {
    padding: 4rem 0;
  }
  span {
    display: block;
  }
  h1 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  //for accordion animation
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
  }
`;
