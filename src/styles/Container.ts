import styled, { css } from "styled-components";

interface iContainerProps {
  flex?: boolean;
}

export const StyledContainer = styled.div<iContainerProps>`
  width: 95%;
  margin: 0 auto;

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  @media (min-width: 750px) {
    width: 100%;
    max-width: 1285px;
    height: 100vh;
  }
`;
