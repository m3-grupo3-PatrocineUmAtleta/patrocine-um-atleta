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

  & > div > div.bodyProfile > div {
    & > div.bio {
      width: 216px;
      height: 152px;
    }
  }

  & > div > div.bodyProfile {
    & > div > div.divContacts {
      & > div.phone,
      & > div.email {
        display: flex;
        gap: 6px;
        align-items: center;
      }
    }
  }
`;
