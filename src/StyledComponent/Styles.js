import styled from "styled-components";

export const SLayout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space;
  padding: 5rem 10rem;
  gap: 10%;
`;

export const SDescription = styled.div`
  font-weight: lighter;
  z-index: 10;
  p {
    padding: 2rem 0;
  }
`;

export const SImageWrapper = styled.div`
  margin-top: 3rem;
  width: 40vw;
  z-index: 10;
  img {
    width: 100%;
  }
`;

export const SHide = styled.div`
  overflow: hidden;
`;
