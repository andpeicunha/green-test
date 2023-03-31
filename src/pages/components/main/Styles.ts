import styled from "styled-components";

export const Main = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  grid-column-gap: 2px;

  #grid-1 {
    visibility: visible;
    grid-column: 1 / 3;
  }

  @media (min-width: 768px) {
    grid-template-columns: 25% 25% 25% 25%;

    #grid-1 {
      grid-column: 1 / 5;
    }
  }
  @media (min-width: 1020px) {
    grid-template-columns: 16.5% 16.5% 16.5% 16.5% 16.5% 16.5%;

    #grid-1 {
      grid-column: 1 / 7;
    }
  }
`;
