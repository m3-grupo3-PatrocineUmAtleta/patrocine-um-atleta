import styled from "styled-components";

export const DivTournaments = styled.div`
  justify-content: center;
  animation: animShow 0.5s;

  .admHeader {
    display: flex;
    justify-content: space-between;
  }
  form {
    display: flex;
    flex-direction: column;

    .divControler {
      display: flex;
      flex-direction: column;
      gap: 20px;

      @media (min-width: 750px) {
        flex-direction: row;
        justify-content: center;
        gap: 30px;
      }
    }

    button {
      max-width: 240px;
      width: 100%;
      height: 44.93px;

      margin: 0 auto;
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

  .uppercase {
    text-transform: uppercase;
  }
  .fieldName,
  .fieldStatus,
  .fieldParticiants,
  .athleteName {
    border: none;

    > select {
      background-color: var(--color-gray-20);
      max-width: 276px;
      /* width: 100%; */
      height: 43.86px;
      padding-left: 12px;
      border-radius: 4px;
      outline: none;
      border: none;
    }
  }

  label,
  legend {
    color: var(--color-primary-100);
  }
  input {
    background-color: var(--color-gray-20);

    @media (min-width: 750px) {
      min-width: 277px;
      max-width: 277px;
    }
  }

  .fieldParticiants {
    > ul {
      height: 100px;
      min-width: 238px;
      background-color: var(--color-gray-20);
      padding: 12px;
      overflow-y: auto;
      margin-bottom: 16px;
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
  .athleteName {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .addbutton {
    width: 32px;
  }
  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;
