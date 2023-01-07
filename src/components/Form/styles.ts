import styled from "styled-components";
import imgButtonHome from "../../assets/img/HomeRedirectButton.png";
import imgButtonLogin from "../../assets/img/LoginRedirectButton.png";

export const SectionForm = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 290px;
  max-width: 400px;
  width: 100%;

  margin: 20px 10px;
  padding-bottom: 16px;

  background: var(--color-primary);
  mix-blend-mode: normal;
  opacity: 0.85;
  border-radius: 8px;

  & > h1 {
    color: var(--color-gray-0);
    text-align: center;
    margin-top: 21px;
    margin-bottom: 30px;
  }

  & > form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 0 12px;

    & > button {
      width: 100%;
      height: 44.93px;
      background: var(--color-secundary);

      border: 2px solid var(--color-secundary);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;

      color: var(--color-gray-0);
      font-weight: 600;
    }

    & > .buttons {
      display: flex;
      justify-content: center;
      gap: 32px;
      & > .home {
        width: 34.78px;
        height: 42.79px;
        cursor: pointer;
        background-image: url(${imgButtonHome});
      }

      & > .login {
        width: 34.78px;
        height: 42.79px;
        cursor: pointer;
        background-image: url(${imgButtonLogin});
      }
    }
  }

  @media (min-width: 403px) {
    margin: 20px auto;
  }

  @media (min-width: 750px) {
    max-width: 506px;

    & > form {
      flex-direction: row;
      flex-wrap: wrap;

      & > .buttons {
        margin: 0 auto;
      }
    }
  }
`;
