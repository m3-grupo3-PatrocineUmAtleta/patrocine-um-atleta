import styled from "styled-components";

export const EmblemCardStyled = styled.div`
  max-width: 200px;
  width: 100%;
  height: 273px;
  margin-top: 19px;
  display: flex;
  flex-direction: column;
  position: relative;

  & > :nth-child(1) {
    width: 193px;
    height: 273px;
    position: relative;
    left: -12px;
  }

  & > :nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: -137px;
    right: 12px;
    z-index: 2;
  }
`;
