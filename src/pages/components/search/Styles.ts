import styled from "styled-components";

export const Input = styled.input`
  border-radius: 50px;
  border: 1px solid #ababab;
  height: 30px;
  margin: 12px 10%;
  padding: 5px 15px;
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
