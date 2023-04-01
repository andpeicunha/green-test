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
