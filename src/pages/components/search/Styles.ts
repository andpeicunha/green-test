import React from "react";
import styled from "styled-components";
import { Menu } from "@mui/material";

const Input = styled.input`
  border-radius: 50px;
  border: 1px solid #ababab;
  height: 25px;
  width: 65%;
  margin: 12px 10px 15px 0;
  padding: 5px 10px;
  font-size: 1.5rem;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 9px 2px rgba(151, 255, 162, 0.5) !important;

  :hover {
    box-shadow: 0px 0px 9px 2px rgba(151, 255, 162, 0.8) !important;
    border: 2px solid #9bc11d;
  }

  :disabled {
    opacity: 0.4;
    background-color: #ababab;
    ::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }

  ::placeholder {
    color: #757575;
    text-transform: uppercase;
    font-size: 12px;
    padding-left: 10px;
  }

  &:focus::placeholder {
    color: transparent;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 12px 0px 15px 15px;
    padding: 5px 10px;
  }
`;
export default Input;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;

  button {
    background-color: transparent;
    border-radius: 100%;
    min-width: 0px;
    width: 0px;
    height: 0px;
    margin-left: 1.5vw;
  }
  button svg {
    height: 28px;
    width: 28px;
  }
  .qtde-favoritos {
    position: absolute;
    background-color: #bce529;
    border-radius: 100%;
    border: 3px solid #596d07;
    margin-top: -23px;
    margin-left: 25px;

    font-size: 0.95rem;
    font-weight: 500;
    color: #596d07;

    height: 15px;
    width: 15px;
  }

  img {
    position: relative;
    top: 9px;
    left: -10px;
    cursor: pointer;
  }
`;

export const StyledMenu = styled(Menu)`
  button:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  svg {
    height: 35px;
    width: 35px;
  }

  .custom-class {
    font-size: 1.3rem;
  }
  .custom-icon svg {
    height: 25px;
  }

  &.custom-iconOff-filter svg path {
    fill: yellow !important;
  }
`;
