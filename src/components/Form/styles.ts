import styled from "styled-components";
import imgButtonHome from "../../assets/img/HomeRedirectButton.png";
import imgButtonLogin from "../../assets/img/LoginRedirectButton.png";

export const SectionForm = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  // min-width: 370px;
  width: 100%;
  max-width: 383px;
  margin: 20px auto;
  padding-bottom: 62px;

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

    & > button {
      width: 277.26px;
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
`;