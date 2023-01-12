import styled from "styled-components";
import { iRenderContainerProps } from ".";

export const StyledContainerRender = styled.section<iRenderContainerProps>`
  max-width: ${({ size }) => size};
  min-height: 486px;
  overflow-y: auto;
  padding: 16px;
  width: 95%;
  background-color: #f2f2f2;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 17px;
  margin-top: 10px;
  position: relative;
  bottom: 30px;
  ::-webkit-scrollbar {
    appearance: none;
  }

  @keyframes identifier {
  }
`;
