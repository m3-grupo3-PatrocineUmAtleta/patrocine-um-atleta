import styled from "styled-components";

export const StyledTournamentCard = styled.li`
  margin-top: 19px;
  min-width: 200px;
  height: 260px;
  display: flex;
  background-color: var(--color-secundary-50);
  border-radius: 10px;
  padding: 30px 14px;
  display: flex;
  flex-direction: column;
  gap: 86px;
  transition: all 0.8s;
  border: 1px solid var(--color-primary-100);

  cursor: pointer;

  & > img {
    height: 44px;
    width: 44px;
  }

  &:hover,
  :focus {
    transform: scale(1.01, 1.07);
    border: 1px solid white;
    background-color: var(--color-secundary-100);
    box-shadow: 0px 0px 10px 2px white;
  }

  & > :nth-child(1) {
    display: flex;
    justify-content: flex-start;
    gap: 6px;
    height: 50px;

    & > :nth-child(1) {
      width: 44px;
      height: 34px;
      border-radius: 10px;
      background-color: var(--color-primary-0);
      align-self: center;
    }
  }

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 12px;

    & > div {
      display: flex;
      gap: 6px;
      img {
        background-color: transparent;
      }
      span {
        color: var(--color-primary-0);
      }
    }
  }
`;
