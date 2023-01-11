import styled from "styled-components";
import { DepositionCard } from ".";

export const StyledDepositionCard = styled(DepositionCard)`
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  background-color: var(--color-gray-20);

  div {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
  }
`