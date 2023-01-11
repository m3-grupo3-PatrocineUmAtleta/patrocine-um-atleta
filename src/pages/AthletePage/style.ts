import styled from "styled-components";

export const AthletePageStyle = styled.div`
  background-color: var(--color-primary-100);
  width: 100vw;
  height: 100vh;

  & > :nth-child(2) {
    padding: 0 16px;
    .sectionTournament {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;

      & > ul {
        display: flex;
        gap: 8px;
        overflow-y: scroll;
        ::-webkit-scrollbar {
          appearance: none;
          width: 0;
          height: 0;
        }
      }
    }
  }

  .divBottomContent {
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
  }

  @media (min-width: 750px) {
    & > :nth-child(2) {
      & > :nth-child(1) {
        justify-content: flex-start;
        gap: 75px;
        & > :nth-child(2) {
          width: 100%;
          max-width: 750px;
          justify-content: center;
          gap: 18px;
        }
      }
    }

    .divBottomContent {
      & > :nth-child(1) {
        justify-content: flex-end;
        flex-direction: row-reverse;
      }
    }
  }
`;
