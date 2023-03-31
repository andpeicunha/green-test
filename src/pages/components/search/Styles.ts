import styled from "styled-components";

export const Input = styled.input`
  border-radius: 50px;
  border: 1px solid #ababab;
  height: 25px;
  width: 75%;
  margin: 12px 0%;
  padding: 5px 10px;
  font-size: 14px;

  ::placeholder {
    color: #ababab;
    text-transform: uppercase;
    font-size: 12px;
  }

  &:focus::placeholder {
    color: transparent;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  img {
    position: relative;
    top: 12px;
    left: 0px;
    cursor: pointer;
  }
`;
