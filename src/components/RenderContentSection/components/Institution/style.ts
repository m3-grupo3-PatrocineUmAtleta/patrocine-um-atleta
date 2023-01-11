import styled from "styled-components";

export const IntitutionStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 67px;

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 505px;
  }

  .divNameAndParticipations {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .descriptionInstitution {
    display: flex;
    align-items: center;
    gap: 8px;
    & > img {
      background-color: red;
      border-radius: 50px;
      height: 42px;
      width: 42px;
    }
  }

  .divLocation {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;
