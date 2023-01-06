import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-primary);
  width: 100%;
  height: 70px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  position: relative;
  gap: 1rem;

  nav {
    width: max-content;
    display: flex;
    gap: 16px;
    a {
      color: var(--color-secundary);
      text-decoration: none;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  div button {
    display: flex;
    justify-content: space-between;
    width: 32px;
    height: 32px;
    background-color: transparent;
  }
  .showDesktop {
    display: none;
  }
  .searchInput {
    position: relative;
    height: 50px;

    input {
      width: 120px;
      height: 46px;
      background-color: var(--color-primary-50);
      border: none;
      border-radius: 8px;
      padding-left: 40px;
      color: var(--color-gray-0);
    }
    button {
      position: absolute;
      z-index: 1;
      top: 10px;
      left: 10px;
    }
  }
  .dropBox {
    width: 175px;
    height: 165px;
    background-color: var(--color-secundary);
    position: absolute;
    top: 65px;
    right: 10px;
    border-radius: 8px;
    nav {
      display: flex;
      flex-direction: column;
      padding: 16px;
      justify-content: space-around;
      width: 100%;
      a {
        text-decoration: none;
        border-bottom: 1px solid var(--color-primary-0);
        height: 30px;
        width: 100%;
        color: var(--color-primary-0);
        &:hover {
          color: var(--color-primary);
          background-color: var(--color-secundary-50);
          border-bottom: 1px solid var(--color-primary);
        }
      }
    }
  }
  @media (min-width: 750px) {
    .showMobile {
      display: none;
    }
    .showDesktop {
      display: flex;
      width: 70%;
    }
    header {
      justify-content: center;
    }
  }
`;
