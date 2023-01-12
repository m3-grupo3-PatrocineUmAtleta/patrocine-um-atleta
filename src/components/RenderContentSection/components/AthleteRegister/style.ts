import styled from "styled-components";

export const DivRegisterAthlete = styled.div`
  margin: 0 auto;
  animation: animShow 0.5s;

  & > form {
    margin: 10px auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 10px;

    & > fieldset {
      min-width: 240px;

      & > label {
        color: var(--color-primary-100);
      }
      & > input,
      & > textarea {
        background-color: var(--color-primary-10);
      }
    }
    & > div.divButtons {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: space-evenly;

      width: 100%;
      & > button {
        max-width: 240px;
        width: 100%;
        height: 44.93px;
        background: var(--color-secundary-100);

        border: none;
        border-radius: 8px;
        color: var(--color-gray-0);

        @media (min-width: 750px) {
          gap: 63.74px;
          justify-content: space-evenly;
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
  }
`;
