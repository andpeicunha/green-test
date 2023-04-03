import styled from "styled-components";

const MainCont = styled.div`
  display: grid;
  grid-column-gap: 0px;

  #grid-1 {
    visibility: visible;
    grid-column: 1 / 3;
  }

  @media (max-width: 767px) {
    grid-template-columns: 49% 49%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 25% 25% 25% 25%;

    #grid-1 {
      grid-column: 1 / 5;
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: 16.85% 16.85% 16.85% 16.85% 16.85% 16.85%;

    #grid-1 {
      grid-column: 1 / 7;
    }
  }
`;
export default MainCont;

export const BgHome = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -50;
  height: 100vh;
  width: 100vw;
  background-image: url("/img/bg-home.png") !important;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: brightness(20%);
`;
