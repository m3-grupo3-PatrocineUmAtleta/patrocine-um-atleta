import styled from "styled-components";

export const StyledDonations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 49px;
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

  form {
    align-self: center;
    max-width: 363px;
    width: 100%;
    height: 263px;
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;
    padding: 0 16px;

    & > div {
      display: flex;
      flex-direction: column;

      & > div {
        display: flex;
        align-items: center;
        max-width: 300px;
        width: 100%;
        height: 48px;
        background-color: var(--color-gray-0);
        border-radius: 3px;
        padding: 13px;
        gap: 10px;

        img {
          align-self: center;
          height: 30px;
          width: 30px;
        }

        div {
          width: 30px;
          background-color: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(0, 0, 0, 0.25);
          transform: rotate(90deg);
        }

        input {
          border: transparent;
          background-color: transparent;
          outline: none;
          height: 30px;
          width: 100%;

          ::-webkit-inner-spin-button {
            appearance: none;
          }
          ::placeholder {
            color: rgba(0, 0, 0, 0.35);
          }
        }
      }
    }
    button {
      width: 100%;
      max-width: 300px;
      height: 37px;
      background-color: var(--color-secundary-100);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      color: #ffff;
      &:disabled {
        cursor: not-allowed;
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
