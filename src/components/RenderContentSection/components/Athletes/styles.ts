import styled from "styled-components";

export const StyledUlAthlete = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  animation: animShow 0.5s;
  justify-content: center;

  @media (min-width: 750px) {
    flex-wrap: wrap;
  }

  @keyframes animShow {
    0% {
      transform: translate(-100px);
      opacity: 0.2;
    }

    60% {
      opacity: 0.7;
    }

    100% {
      transform: translate(0px);
      opacity: 1;
    }
  }
`;
