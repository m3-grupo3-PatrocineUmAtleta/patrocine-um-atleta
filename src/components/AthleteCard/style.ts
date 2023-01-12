import styled from "styled-components";

export const StyledAthleteCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 2px solid var(--color-primary-100);
  border-radius: 8px;

  min-width: 236.91px;
  width: 240px;
  height: 300px;

  :hover {
    transition: 0.5s;
    border: 2px solid var(--color-secundary-100);

    box-shadow: rgba(242, 68, 5, 0.25) 0px 54px 55px,
      rgba(242, 68, 5, 0.12) 0px -12px 30px, rgba(242, 68, 5, 0.12) 0px 4px 6px,
      rgba(242, 68, 5, 0.17) 0px 12px 13px, rgba(242, 68, 5, 0.09) 0px -3px 5px;
    transform: scale(1.03) translateY(5px);

    & > .div-inf {
      transition: 0.2s;
      background-color: var(--color-secundary-100);

      & > .div-icons > .heart-fill {
        transition: 0.2s;
        color: var(--color-primary-100);
      }
    }

    & > .div-img {
      position: relative;

      & > img {
        transition: 5s;
        transform: scale(1.2);
      }
    }
  }

  .div-img {
    width: 100%;
    height: 65%;

    overflow: hidden;

    border-radius: 6px 6px 0 0;

    & > img {
      width: 100%;
      height: 100%;
    }
  }

  .div-inf {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 100%;
    height: 35%;

    padding: 16px;

    background-color: var(--color-primary-100);

    border-radius: 0 0 6px 6px;

    & > h3,
    h4 {
      color: var(--color-gray-0);
    }
    .value {
      margin-top: 16px;
    }

    .div-local {
      display: flex;
      margin-top: 16px;
      gap: 8px;

      & > .local-icon {
        color: var(--color-gray-0);
        height: 16px;
      }
      & > span {
        color: var(--color-gray-0);
      }
    }
  }

  .div-icons {
    position: absolute;
    right: 0;
    top: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    width: 20%;
    height: 100%;

    & > .icon {
      scale: 1.3;
      color: var(--color-primary-0);
      cursor: pointer;

      :hover {
        transition: 0.2s;
        color: var(--color-primary-100);
        scale: 2;
      }
    }
  }
`;
