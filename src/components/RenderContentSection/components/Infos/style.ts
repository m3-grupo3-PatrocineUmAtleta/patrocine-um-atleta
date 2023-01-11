import styled from "styled-components";

export const DivInfos = styled.div`
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
`;
