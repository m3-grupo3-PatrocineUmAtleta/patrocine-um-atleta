import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #00000075;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;

  z-index: 3;

  & > div {
    background-color: var(--color-gray-0);

    min-height: 338px;
    width: 100%;
    max-width: 761px;

    padding: 24px;
    margin: 0 10px;

    border-radius: 17px;

    position: relative;
    z-index: 3;
    max-height: 600px;
    overflow-y: auto;

    & > div {
      display: flex;
      gap: 21px;

      & > div.ball {
        background-color: var(--color-secundary-100);
        border-radius: 100%;
        height: 42px;
        width: 42px;
      }

      & > h3 {
        align-self: center;
      }
    }

    & > button {
      position: absolute;
      top: 24px;
      right: 24px;
      background-color: transparent;

      & > img {
        width: 24px;
        height: 24px;
      }
    }
  }

  .divButtons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 90px;

    @media (min-width: 750px) {
      flex-direction: row;
    }

    button {
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
`;
