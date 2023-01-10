import styled from "styled-components";

export const BioStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 67px;

  .divTitleDescription {
    display: flex;
    align-items: center;
    gap: 16px;
    img {
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

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 505px;
  }
`;
