import styled from "styled-components";

export const StyledHome = styled.div`
  main .sectionSponsorship .register {
    background-color: var(--color-primary-100);
    position: relative;
    height: 450px;
    overflow: hidden;

    .title-home {
      display: inline-block;
      margin-top: 15px;
      text-align: center;
    }

    .text-body {
      margin-top: 25px;
    }

    img {
      position: absolute;
      bottom: 54px;
      right: -25px;
      z-index: 0;
      transform: rotateZ(26deg) scale(0.9);

      @media (min-width: 321px) {
        bottom: 80px;
        right: -28px;
      }

      @media (min-width: 400px) {
        bottom: 68px;
        right: 7px;
        transform: rotateZ(7deg) scale(1.1);
      }

      @media (min-width: 750px) {
        bottom: 97px;
        right: 223px;
        transform: rotateZ(5.7deg) scale(1.7);
      }

      @media (min-width: 1230px) {
        bottom: 166px;
        right: 279px;
        transform: rotateZ(3deg) scale(3.2);
      }
    }

    a {
      margin-top: 25px;
      display: inline-block;
      font-size: 20px;
      font-weight: 400;
      letter-spacing: 1.5px;
      color: var(--color-secundary-100);
      position: relative;
      text-shadow: 2px 2px black;
    }
  }

  main .sectionSponsorship .athlete {
    max-height: 648px;
    min-height: 320px;
    background-color: var(--color-gray-20);

    > div {
      transform: translateY(-90px);

      .title-home-2 {
        text-align: center;
      }

      ul {
        background-color: white;
        height: 344px;
        max-width: 827px;

        min-width: 300px;

        margin: 0 auto;
        padding: 12px;
        border-radius: 15px;
        margin-top: 10px;

        display: flex;
        gap: 36px;
        overflow-x: auto;

        @media (min-width: 750px) {
          flex-wrap: wrap;
          height: fit-content;
          min-height: 250px;
        }
      }
    }
  }

  main .sectionDonation .reach {
    background-color: var(--color-primary-100);
    padding-bottom: 15px;

    .title-home-2 {
      text-align: center;
      margin-top: 25px;
      display: inline-block;
      width: 100%;
    }

    .text-body {
      margin-top: 15px;
      text-align: justify;
      padding: 0 5px;
    }

    .reach-info {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 22px;
      margin-top: 15px;

      > div {
        display: flex;
        flex-direction: column;
        max-width: 130px;
        gap: 10px;
      }
    }

    @media (min-width: 750px) {
      .text-body {
        padding: 0 200px;
      }

      .reach-info {
        gap: 83px;
        padding: 30px 0;

        > div {
          max-width: 250px;
          align-items: center;

          img {
            max-width: 130px;
          }
        }
      }
    }
  }

  main .sectionDonation > div:last-child {
    background-color: var(--color-primary-0);
    padding-top: 25px;
    padding-bottom: 30px;

    .title-1 {
      color: var(--color-primary-100);
      text-align: center;
    }

    .text-body {
      color: var(--color-primary-100);
      margin-top: 15px;
      text-align: justify;
      padding: 0 5px;
    }

    @media (min-width: 750px) {
      .text-body {
        padding: 0 200px;
      }
    }
  }

  footer {
    background-color: var(--color-primary-100);
    padding-top: 10px;
    padding-bottom: 10px;

    > div {
      > div:first-of-type {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        > img {
          max-width: 100px;
        }

        > div {
          .title-3 {
            text-align: center;
          }

          > div {
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 15px;
          }
        }

        > div:first-of-type {
          > h3:last-of-type {
            display: none;
          }
          > h3:first-of-type {
            display: block;
          }
        }

        > div:last-of-type > div > div > .headline-600 {
          display: none;
        }

        @media (min-width: 750px) {
          > img {
            max-width: 210px;
          }

          > div {
            flex-direction: column;
            gap: 10px;
          }

          > div:first-of-type {
            > h3:last-of-type {
              display: block;
            }
            > h3:first-of-type {
              display: none;
            }
          }

          > div:last-of-type > div {
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 25px;
          }

          > div:last-of-type > div > div {
            gap: 15px;
          }

          > div:last-of-type > div > div:last-of-type {
            align-items: flex-start;
          }

          > div:last-of-type > div > div > .headline-600 {
            display: block;
          }
        }
      }

      > div:last-of-type {
        display: block;
        text-align: center;
      }
    }
  }
`;
