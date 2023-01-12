import styled from "styled-components";

export const StyledDepositionCard = styled.li`
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  background-color: var(--color-gray-20);

  & > div {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    width: 100%;
    height: fit-content;
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
  }
`