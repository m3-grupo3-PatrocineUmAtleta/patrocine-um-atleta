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
`;
