import { DetailedHTMLProps, HTMLAttributes } from "react";
import styled, { ThemedStyledProps } from "styled-components";

interface StyledComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  src?: string;
  alt?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  color: white;
  height: 100vh;
  width: 100vw;
  font-family: "Roboto Condensed" !important;

  background-color: #000;

  .imgBigMedia {
    position: absolute;
    top: 8rem;
    left: 2.5rem;
    height: 380px !important;
    width: 380px !important;
    border-radius: 20px;
    box-shadow: 0px 1px 7px 1px rgba(0, 0, 0, 0.8);
    visibility: hidden;
  }

  img {
    position: absolute;
    top: -0.7rem;
    right: 1.5rem;

    height: 10rem;
    width: 20rem;
  }

  button {
    position: absolute;
    top: 2.5rem;
    left: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    background-color: #fff;
    border: none;
    font-size: 1.3rem;
    cursor: pointer;
  }

  .favorite-icon {
    position: absolute;
    top: 0.3rem;
    left: -4rem;
    background-color: transparent;
  }
  .favorite-icon svg {
    height: 3rem !important;
    width: 2.5rem !important;
  }

  .nome {
    position: absolute;
    top: 35rem;
    margin-left: 5.1rem;
    font-size: 4rem;
  }

  .description {
    position: absolute;
    top: 40rem;
    margin-left: 2rem;
    margin-top: 1rem;
    font-size: 1.6rem;
    line-height: 1.8;

    #strongBg {
      background-color: #00b4cc;
      padding: 0.07rem 0.5rem 0.1rem 0.5rem;
      margin: 0 0.3rem;
      border-radius: 4px;
      color: #000;
      font-weight: 700;
      cursor: pointer;
    }
  }

  .episode {
    position: absolute;
    top: 48rem;
    margin-left: 2rem;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.8;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .nome {
      top: 65vh;
    }
    .description {
      top: 71vh;
    }
  }

  @media (min-width: 1024px) {
    .nome {
      top: 65vh;
    }
    .description {
      top: 71vh;
    }
    .imgBigMedia {
      visibility: visible;
    }
  }
`;
export default Wrapper;

export const StImgDetails = styled.div<ThemedStyledProps<StyledComponentProps, any>>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 92%), url(${(props) => props.src});
  background-size: cover;
  background-position-x: center;
  background-repeat: no-repeat;

  height: 90vh;
  width: 100vw;

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 100vh;

    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 100%), url(${(props) => props.src});
    background-size: cover;
    background-position-x: center;
    background-repeat: no-repeat;
  }

  @media (min-width: 1024px) {
    height: 100vh;

    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 100%), url(${(props) => props.src});
    background-size: cover;
    background-position-x: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: blur(8px);
  }
`;
