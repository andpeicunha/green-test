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
  justify-content: space-evenly;

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
`;
