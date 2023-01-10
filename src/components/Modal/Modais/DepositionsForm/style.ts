import styled from "styled-components";

export const DepositionsStyle = styled.div`
  flex-direction: column;
  padding: 20px;
  & > :nth-child(1) {
    align-self: flex-start;
  }

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 37px;
    & > textarea {
      resize: none;
      outline: none;
      max-width: 659px;
      width: 100%;
      border-radius: 5px;
      background-color: var(--color-primary-0);
      height: 159px;
      border: none;
      padding: 0 16px;
    }
  }
  .divNameAndButton {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 111px;

    button {
      width: 221px;
      height: 37px;
      background-color: var(--color-secundary-100);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      color: #ffff;
    }
  }
`;
