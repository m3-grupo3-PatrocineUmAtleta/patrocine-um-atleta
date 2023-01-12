import styled from "styled-components";

export const StyledBio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 67px;
  animation: animShow 0.5s;

  .divTitleDescription {
    display: flex;
    align-items: center;
    gap: 16px;
    img {
      background-color: red;
      border-radius: 50px;
      height: 42px;
      width: 42px;
    }
  }
  .divLocation {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 505px;
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
