import styled from "styled-components";

export const StyledIntitution = styled.div`
  display: flex;
  flex-direction: column;
  gap: 67px;
  animation: animShow 0.5s;

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
`;
