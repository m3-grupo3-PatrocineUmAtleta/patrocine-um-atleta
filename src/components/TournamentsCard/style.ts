import styled from "styled-components";

export const TournamentCardStyle = styled.li`
  margin-top: 19px;
  min-width: 165px;
  height: 276px;
  display: flex;
  background-color: var(--color-secundary-50);
  border-radius: 10px;
  padding: 30px 14px;
  display: flex;
  flex-direction: column;
  gap: 86px;
  cursor: pointer;

  &:hover,
  :focus {
    background-color: var(--color-secundary-100);
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
