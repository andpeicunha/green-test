import styled from "styled-components";

const MainCont = styled.div`
  display: grid;
  grid-column-gap: 0px;

  #grid-1 {
    visibility: visible;
    grid-column: 1 / 3;
  }

  @media (max-width: 767.99px) {
    grid-template-columns: 48% 48%;
  }

  @media (min-width: 768px) and (max-width: 1023.99px) {
    grid-template-columns: 24.1% 24.1% 24.1% 24.1%;

    #grid-1 {
      grid-column: 1 / 5;
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: 16.25% 16.25% 16.25% 16.25% 16.25% 16.25%;

    #grid-1 {
      grid-column: 1 / 7;
    }
  }
`;
export default MainCont;
