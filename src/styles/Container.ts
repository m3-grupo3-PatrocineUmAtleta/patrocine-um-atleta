import styled, { css } from "styled-components";

interface iContainerProps {
  flex?: boolean;
}

export const StyledContainer = styled.div<iContainerProps>`
  width: 95%;
  margin: 0 auto;
  justify-content: center;

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  @media (min-width: 750px) {
    max-width: 1285px;
    .rowReverse {
      display: flex;
      flex-direction: row-reverse;
    }
  }
`;
