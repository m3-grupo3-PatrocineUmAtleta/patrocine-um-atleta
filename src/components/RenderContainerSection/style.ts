import styled from "styled-components";
import { iRenderContainerProps } from ".";

export const ContainerRenderStyle = styled.section<iRenderContainerProps>`
  max-width: ${({ size }) => size};
  min-height: 323px;
  overflow-y: scroll;
  padding: 16px;
  width: 95%;
  background-color: #f2f2f2;
  height: 486px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 17px;
  margin-top: 10px;
  /* position: relative; */
  /* top: -30px; */
  ::-webkit-scrollbar {
    appearance: none;
  }
`;
