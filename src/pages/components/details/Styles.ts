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
      padding: 0.07rem 0.4rem 0.1rem 0.4rem;
      border-radius: 4px;
      color: #000;
      font-weight: 700;
      cursor: pointer;
    }
  }

  .episode {
    position: absolute;
    top: 48rem;
    left: -0.4rem;
    font-size: 1.5rem !important;

    width: 100vw;
    display: grid;
    grid-gap: 0.3rem 4%;
    grid-template-columns: repeat(8, 7.2vw);

    ul {
      display: flex !important;
      justify-content: center;
      align-items: center;
    }

    .item {
      text-align: center;
      cursor: pointer !important;
    }
    .item:first-child {
      grid-column: 1/-1;
    }

    #strongBg {
      background-color: #00b4cc;
      padding: 0.07rem 0.5rem 0.1rem 0.5rem;
      margin: 0 0.3rem;
      border-radius: 4px;
      color: #000;
      font-weight: 700;
      cursor: pointer;
    }
    #strongBg.title {
      background-color: rgba(0, 0, 0, 0.5) !important;
      padding-left: 1rem;
      font-size: 2rem !important;
      color: #fff;
      text-align: left !important;
      margin: 0;
    }

    margin-left: 2rem;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.8;

    li {
      list-style: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .imgBigMedia {
      top: 7.5rem !important;
      visibility: visible;
      height: 250px !important;
      width: 250px !important;
    }
    .nome {
      top: 34rem;
    }
    .description {
      top: 38rem;
    }
    .episode {
      top: 46rem;
      grid-gap: 1rem 1.5%;
      grid-template-columns: repeat(14, 5.4%);
    }
  }

  @media (min-width: 1024px) {
    .nome {
      top: 47.5rem;
    }
    .description {
      top: 51.5rem;
    }
    .imgBigMedia {
      visibility: visible;
    }
    .episode {
      top: 9vh;
      left: 43rem;
      grid-gap: 1.2rem 2%;
      grid-template-columns: repeat(8, 5%);
    }
  }
`;
export default Wrapper;

export const StImgDetails = styled.div<ThemedStyledProps<StyledComponentProps, any>>`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 92%), url(${(props) =>
    props.src}); */
  background-color: #000;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position-x: center;
  background-repeat: no-repeat;
  position: fixed;
  z-index: -1;

  height: 90vh;
  width: 100vw;

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 100vh;

    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 100%), url(${(props) => props.src});
    background-size: cover;
    background-position-x: center;
    background-repeat: no-repeat;
    filter: blur(8px) brightness(60%);
  }

  @media (min-width: 1024px) {
    height: 100vh;

    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 100%), url(${(props) => props.src});
    background-size: cover;
    background-position-x: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: blur(8px) brightness(60%);
  }
`;

export const MaskGradiente = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: red;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1) 87%);
  z-index: -1;

  @media (min-width: 768px) and (max-width: 1023px) {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1) 90%);
  }

  @media (min-width: 1024px) {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 95%);
  }
`;
