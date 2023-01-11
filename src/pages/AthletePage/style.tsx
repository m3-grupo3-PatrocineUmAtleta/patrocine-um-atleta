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

  & > :nth-child(3) {
    background-color: var(--color-primary-10);
    margin-top: 57px;
    width: 100vw;

    & > :nth-child(1) {
      display: flex;
      flex-direction: column;

      & > :nth-child(1) {
        align-self: center;
      }

      .sideBarButtons {
        background-color: var(--color-primary-10);
        position: sticky;
        z-index: 2;
        padding: 15px 0;
        bottom: 0;

        & > :nth-child(1) {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 8px;
          overflow-x: scroll;
          max-width: 760px;

          ::-webkit-scrollbar {
            appearance: none;
            width: 0;
            height: 0;
          }
        }
      }
    }
  }

  @media (min-width: 750px) {
    & > :nth-child(2) {
      & > :nth-child(1) {
        justify-content: flex-start;
        gap: 75px;
        & > :nth-child(2) {
          gap: 18px;
        }
      }
    }

    & > :nth-child(3) {
      & > :nth-child(1) {
        justify-content: flex-end;
        flex-direction: row-reverse;

        & > .sideBarButtons {
          display: flex;
          justify-content: unset;
          align-items: unset;
          position: relative;
          max-width: 286px;
          height: 385px;
          width: 100%;
          & > :nth-child(1) {
            gap: 27px;
            flex-wrap: wrap;
            overflow-y: unset;
          }
        }
      }
    }
  }
`;
