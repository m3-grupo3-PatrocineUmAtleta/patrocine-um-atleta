import styled from "styled-components";

export const SideBarButtonsStyle = styled.aside`
  background-color: var(--color-primary-10);
  position: sticky;
  z-index: 2;
  padding: 15px 0;
  bottom: 0;

  & > :nth-child(1) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    overflow-x: scroll;

    ::-webkit-scrollbar {
      appearance: none;
      width: 0;
      height: 0;
    }
  }

  @media (min-width: 750px) {
    display: flex;
    justify-content: unset;
    align-items: unset;
    position: relative;
    max-width: 286px;
    height: 385px;
    width: 100%;
    z-index: 0;
    & > :nth-child(1) {
      gap: 27px;
      flex-wrap: wrap;
      overflow-y: unset;
    }
  }
`;
