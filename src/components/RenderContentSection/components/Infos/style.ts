import styled from "styled-components";

export const DivInfos = styled.div`
  animation: animShow 0.5s;
  .uppercase {
    text-transform: uppercase;
    margin-bottom: 43px;
  }
  .divInfo {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    > div {
      width: 250px;
      > p {
        width: 207px;
      }
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
`;
