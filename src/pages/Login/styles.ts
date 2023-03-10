import styled from "styled-components";
import imgBackgrondRegister from "../../assets/img/LogoPatrocineUmAtleta-Claro.png";
import imgLogoParcial from "../../assets/img/LogoParcial.png";

export const MainLogin = styled.main`
  background-image: url(${imgBackgrondRegister});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  width: 100vw;
  height: 100vh;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }

  & > div > .first button {
    &:disabled {
      filter: brightness(50%);
      cursor: wait;
    }

    > svg {
      animation: spinnerLoad 1s linear infinite;
    }
  }

  & > div > section.second {
    background: var(--color-primary-100);
    mix-blend-mode: normal;
    opacity: 0.85;

    border-radius: 8px;

    min-width: 290px;
    max-width: 383px;
    width: 100%;

    height: 332px;
    margin: 20px 24px;

    display: flex;
    flex-direction: column;
    align-items: center;

    & > .logo {
      background-image: url(${imgLogoParcial});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;

      width: 170px;
      height: 120px;
    }

    & > p.headline {
      width: 259.7px;
      height: 71.86px;
      color: var(--color-secundary-100);
    }

    & > div {
      width: 290.19px;
      height: 100.06px;
      padding: 15px;

      border: 1px solid var(--color-gray-20);
      border-radius: 4px;

      & > p {
        color: var(--color-gray-20);
      }

      & > a {
        color: var(--color-secundary-100);
      }
    }
  }

  @media (min-width: 750px) {
    height: 100vh;

    & > div {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      gap: 60px;

      height: 100%;
      width: 706px;

      margin: 0 auto;
      padding: 0;
    }

    & > div > section.first {
      width: 320px;
      height: 390px;

      & > form {
        & > fieldset {
          max-width: 296px;

          & > input {
            max-width: 296px;
          }
        }
      }
    }

    & > div > section.second {
      width: 320px;
      height: 390px;

      gap: 20px;
    }
  }

  @keyframes spinnerLoad {
    to {
      transform: rotate(360deg);
    }
  }
`;
