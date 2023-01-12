import styled from "styled-components";

export const StyledDepositionCard = styled.li`
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  background-color: var(--color-gray-20);
  border: 1px solid black;

  :hover,
  :focus {
    transition: all 0.2s;
    transform: scale(1.01, 0.97);
    border: 1px solid black;
    box-shadow: 0px 0px 5px 1px black;
    cursor: pointer;
  }

  & > div {
    display: flex;
    gap: 10px;
    padding-bottom: 20px;
    width: 100%;
    height: fit-content;
    align-items: center;
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
  }
`;
