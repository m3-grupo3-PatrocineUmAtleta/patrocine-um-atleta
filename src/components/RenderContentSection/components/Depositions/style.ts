import styled from "styled-components";

export const DepositionsStyle = styled.div`
  display: flex;
  flex-direction: column;
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

  .divNameAndButton {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      width: 139px;
      height: 37px;
      background-color: var(--color-secundary-100);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      color: #ffff;
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
