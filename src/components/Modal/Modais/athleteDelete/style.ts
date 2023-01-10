import styled from "styled-components";

export const DivAthleteDelete = styled.div`
  margin: 64px auto;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 49px;
  justify-content: center;
  align-items: center;

  & > div.divButtons {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;

    width: 100%;
    margin: 0 auto;

    & > button {
      max-width: 240px;
      width: 100%;
      height: 44.93px;
      background: var(--color-secundary-100);

      border: none;
      border-radius: 8px;
      color: var(--color-gray-0);
    }
  }
`;
