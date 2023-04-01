import styled from "styled-components";

const Input = styled.input`
  border-radius: 50px;
  border: 1px solid #ababab;
  height: 25px;
  width: 65%;
  margin: 12px 10px 0 0;
  padding: 5px 10px;
  font-size: 1.5rem;
  background-color: rgba(255, 255, 255, 0.5);

  :disabled {
    opacity: 0.6;
    background-color: #d9d9d9;
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

  @media (min-width: 420px) {
    margin: 12px 0px 0 15px;
    padding: 5px 10px;
  }
  @media (min-width: 768px) {
    width: 80%;
    font-size: 16px;
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
