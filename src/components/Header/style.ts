import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-primary-100);
  width: 100%;
  height: 70px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  gap: 1rem;
  .dropBoxUser {
    width: max-content;
    height: max-content;
    background-color: var(--color-primary-100);
    position: absolute;
    top: 65px;
    right: 10px;
    padding: 12px 16px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    color: var(--color-gray-0);
  }

  .dropBoxUserDesktop {
    display: none;
    align-items: center;
  }
  .divAdminOptions {
    display: flex;
    align-items: center;
    gap: 30px;
    width: max-content;
  }

  nav {
    width: max-content;
    display: flex;
    gap: 16px;
    a {
      color: var(--color-secundary-100);
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
      transition: width 1s;
    }

    button {
      position: absolute;
      z-index: 1;
      top: 10px;
      left: 10px;
    }
  }
  .backPage {
    color: var(--color-gray-0);
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .showMobile {
    display: flex;
    align-items: center;
  }
  .dropBox {
    width: 175px;
    height: max-content;
    background-color: var(--color-secundary-100);
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
          color: var(--color-primary-100);
          background-color: var(--color-secundary-50);
          border-bottom: 1px solid var(--color-primary-100);
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
    }
    header {
      justify-content: center;
    }
    .dropBoxUser {
      display: none;
    }
    .dropBoxUserDesktop {
      display: flex;
    }
    .divAdminOptions .searchInput input {
      width: 200px;
    }
  }

  @media (min-width: 940px) {
    .searchInput > input:focus {
      width: 340px;
    }
  }
`;
