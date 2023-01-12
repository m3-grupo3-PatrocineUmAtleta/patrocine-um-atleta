import styled from "styled-components";

export const StyledUserDash = styled.div`
  background-color: var(--color-primary-100);

  .bg-blue {
    width: 100%;
    height: 50vh;

    & > img {
      display: none;
    }
  }
  .container {
    width: 100%;

    padding: 16px;
    margin: 0 auto;
    /* min-height: 50vh; */
    /* flex-direction: column; */
  }
  .donations-history {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid var(--color-gray-0);

    & > h2 {
      border-bottom: 1px solid var(--color-gray-0);
      width: 100%;
      text-align: center;
      text-justify: center;
      padding: 8px;
    }
  }
  .ul-mobile {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 16px;
    padding: 16px;
  }
  .ul-desktop {
    display: none;
  }
  .render-buttons {
    background-color: white;
    width: 100%;
    height: 30vh;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 16px;
  }
  .sidebar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & > ul {
      width: 100%;
      overflow-x: scroll;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background-color: var(--color-gray-0);
      & > li {
        & > button {
          border-radius: 10px;
          background-color: var(--color-primary-0);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          outline: none;
          img {
            height: 40px;
            width: 40px;
            opacity: 0.5;
          }
          h4 {
            color: rgba(0, 0, 0, 0.5);
          }
          &:focus {
            background: var(--color-gray-0);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px 10px 0px 10px;
            border-bottom: 5px solid var(--color-secundary-100);
            img {
              opacity: 1;
            }
            h4 {
              color: rgba(0, 0, 0, 1);
            }
          }
        }
      }
    }
  }
  @media (min-width: 750px) {
    .bg-blue {
      height: 70vh;
    }
    .container {
      height: fit-content;
    }
    .donations-history {
      width: 905px;
      height: 320px;
      border-radius: 8px;
    }

    .ul-mobile {
      display: none;
    }
    .ul-desktop {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 16px;
      height: 280px;
      & > li {
        scale: 0.8;
        width: 180px;
        border: 1px solid var(--color-gray-0);
      }
    }
    .render-buttons {
      width: 700px;
      height: 350px;
    }
    .sidebar {
      position: absolute;
      left: 475px;
      bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      & > ul {
        width: 200px;
        height: fit-content;
        overflow-x: hidden;
        gap: 16px;
        background-color: white;
        display: grid;
        grid-template-columns: auto auto;
        & > li {
          min-width: 50px;
          scale: 0.8;
          & > button {
            border-radius: 10px;
            width: 100px;
            height: 100px;
            background-color: var(--color-primary-0);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img {
              height: 40px;
              width: 40px;
              opacity: 0.5;
            }
            h4 {
              color: rgba(0, 0, 0, 0.5);
            }
            &:focus {
              background: var(--color-gray-0);
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              border-radius: 10px 10px 0px 10px;
              border-bottom: 5px solid var(--color-secundary-100);
              img {
                opacity: 1;
              }
              h4 {
                color: rgba(0, 0, 0, 1);
              }
            }
          }
        }
      }
    }
  }
`;
