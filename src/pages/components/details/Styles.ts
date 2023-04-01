import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  height: 100vh;
  width: 100vw;

  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 1) 90%), url("/img/bgDetails.png");
  background-size: cover;
  background-position-x: center;
  background-position-y: -5rem;
  background-repeat: no-repeat;
  background-color: #000;
`;
export default Wrapper;
