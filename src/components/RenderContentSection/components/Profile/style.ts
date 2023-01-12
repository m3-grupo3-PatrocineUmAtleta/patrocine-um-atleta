import styled from "styled-components";

export const DivProfile = styled.div`
  animation: animShow 0.5s;
  .uppercase {
    text-transform: uppercase;
  }
  padding: 6px;
  & > .divDataAndButton {
    display: flex;
    justify-content: space-between;

    & > button {
      background-color: transparent;
    }
  }

  & > div.profileControler > div.bodyProfile {
    @media (min-width: 750px) {
      display: flex;
      justify-content: space-between;
      gap: 16px;
    }

    & > div.dados1 {
      max-width: 390px;

      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    & > div.dados2 {
      max-width: 390px;
      display: flex;
      flex-direction: column;
      gap: 16px;

      & > div.divContacts {
        & > div.phone,
        & > div.email {
          display: flex;
          gap: 6px;
          align-items: center;
        }
      }
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
