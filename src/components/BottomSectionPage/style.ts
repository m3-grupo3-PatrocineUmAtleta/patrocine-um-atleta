import styled from "styled-components";

export const BottomSectionStyle = styled.div`
  background-color: var(--color-primary-10);
  margin-top: 57px;
  width: 100vw;
  position: absolute;
  bottom: -96px;

  & > :nth-child(1) {
    display: flex;
    flex-direction: column;

    & > :nth-child(1) {
      align-self: center;
    }
  }

  @media (min-width: 750px) {
    bottom: 43px;

    & > :nth-child(1) {
      justify-content: flex-end;
      flex-direction: row-reverse;
    }
  }
`;
