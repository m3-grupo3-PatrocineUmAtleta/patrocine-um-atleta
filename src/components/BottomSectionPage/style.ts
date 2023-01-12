import styled from "styled-components";

export const StyledBottomSection = styled.div`
  background-color: var(--color-primary-10);
  margin-top: 57px;
  width: 100vw;

  & > :nth-child(1) {
    display: flex;
    flex-direction: column;

    & > :nth-child(1) {
      align-self: center;
    }
  }

  @media (min-width: 750px) {
    & > :nth-child(1) {
      justify-content: flex-end;
      flex-direction: row-reverse;
    }
  }
`;
