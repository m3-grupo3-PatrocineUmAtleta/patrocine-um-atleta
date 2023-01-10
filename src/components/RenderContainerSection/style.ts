import styled from "styled-components";

export const ContainerRenderStyle = styled.section`
  min-height: 323px;
  overflow-y: scroll;
  padding: 16px 25px;
  width: 95%;
  max-width: 760px;
  background-color: #f2f2f2;
  height: 486px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 17px;
  position: relative;
  top: -30px;
  ::-webkit-scrollbar {
    appearance: none;
  }
`;
