import styled from "styled-components";

const CardMain = styled.div`
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
export default CardMain;

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

export const CardBt = styled.div`
  text-align: center;
  padding: 10px 10%;
  margin: 20px 0;

  button {
    padding: 10px 20px;
    margin: 10px 0;
    border-radius: 50px;
    border: 1px solid #97ffa2;
    background-color: #0af056;
    box-shadow: 0px 0px 10px 4px rgba(10, 240, 86, 0.3);

    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Roboto Condensed";
    cursor: pointer;
  }
`;

export const FavBt = styled.button`
  position: relative;
  border: none;
  top: 3.5px;
  left: 45%;
  z-index: 100;
  background-color: transparent;

  svg {
    height: 17px;
    width: 17px;
  }
  svg path {
    cursor: pointer;
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
  margin-top: 10px;
  color: #b2b2b2;

  &.search {
    font-size: 1.5rem !important;
  }
  &.filter {
    font-weight: 700;
    font-size: 1.5rem !important;
  }
  &.filter img {
    margin-left: 5px;
    cursor: pointer;
  }
  &.error {
    font-size: 1.8rem !important;
    color: red;
  }
  @media (min-width: var(--mobile-size)) {
    &.error {
      font-size: 2rem !important;
    }
  }
`;

export const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 190px;
  padding: 10px 5% 0px 5px;

  img {
    height: auto;
    width: 110%;
    margin: 10px 0 0 10px;
    aspect-ratio: attr(width) / attr(height);
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 220px;
    img {
      width: 70%;
    }
  }
  @media (min-width: 1024px) {
    height: 260px;
    img {
      width: 60%;
    }
  }
`;
