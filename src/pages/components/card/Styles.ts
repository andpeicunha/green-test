import styled from "styled-components";

export const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 15px 0px;
  cursor: pointer;
  border: 0px solid red;

  img {
    border-radius: 20px 20px 0px 0px;
    padding: 5px 5px 0px 5px;
    margin-bottom: -6px;
    height: 68%;
    width: 99%;
  }
`;

export const CardText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  width: 104%;
  height: 70px;
  box-shadow: 0px 1px 7px 1px rgba(150, 150, 150, 0.3);
`;

export const CardName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-family: "Roboto Condensed";
  font-size: 1.7rem;
  text-align: center;
  margin: 5px 0;
  text-transform: uppercase;

  @media (max-width: 320px) {
    font-size: 1.4rem;
  }
`;

export const CardLocation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto Condensed";
  text-align: center;
  font-size: 1.3rem;
  color: rgb(150, 150, 150);
  margin: 5px 0;

  @media (max-width: 320px) {
    font-size: 1.1rem;
  }
`;

export const CardBt = styled.button`
  border-radius: 50px;
  border: none;
  font-size: 1.5rem;
  padding: 10px;
  background-color: #73fd81;
  border: 1px solid #67e374;
  margin: 20px 20% 30px;
  cursor: pointer;
`;

export const FavBt = styled.button`
  position: relative;
  border: none;
  top: 2.5px;
  left: 45%;
  z-index: 100;
  background-color: transparent;

  svg path {
    cursor: pointer;
    height: 16px;
    width: 16px;
    border: 8px solid transparent;
    fill: gray !important;
  }
  svg path:hover {
    fill: yellow !important;
  }
  &.active path {
    fill: #00e692 !important;
  }
`;

export const ErrorMsg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto Condensed";
  font-size: 1.5rem;
`;

export const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 10px 0 0 0;

  img {
    height: auto;
    width: 90%;
    aspect-ratio: attr(width) / attr(height);
  }

  @media (min-width: 425px) {
    height: 120px;
  }

  @media (min-width: 760px) {
    height: 150px;
  }
  @media (min-width: 1020px) {
    height: 200px;
  }
  @media (min-width: 1440px) {
    height: 260px;
  }
`;
