import styled from "styled-components";

export const MediaStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
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
  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 59px;
    h3 {
      width: 390px;
    }
  }

  .divIcons {
    display: flex;
    align-items: center;
    gap: 37px;

    a > img {
      width: 80px;
      height: 80px;
    }
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
