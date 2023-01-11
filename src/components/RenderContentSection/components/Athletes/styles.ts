import styled from "styled-components";

export const StyledUlAthlete = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: 16px;

  @media (min-width: 750px) {
    flex-wrap: wrap;
  }
`;
