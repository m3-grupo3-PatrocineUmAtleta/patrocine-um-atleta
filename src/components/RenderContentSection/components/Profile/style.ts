import styled from "styled-components";

export const DivProfile = styled.div`
  padding: 6px;
  & > .divDataAndButton {
    display: flex;
    justify-content: space-between;

    & > button {
      background-color: transparent;
    }
  }

  & > div.profileControler > div.bodyProfile {
    @media (min-width: 750px) {
      display: flex;
      justify-content: space-between;
      gap: 16px;
    }

    & > div.dados1 {
      max-width: 390px;

      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    & > div.dados2 {
      max-width: 390px;
      display: flex;
      flex-direction: column;
      gap: 16px;

      & > div.divContacts {
        & > div.phone,
        & > div.email {
          display: flex;
          gap: 6px;
          align-items: center;
        }
      }
    }
  }
`;