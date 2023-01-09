import styled from "styled-components";

export const StyledHome = styled.div`
  main .sectionSponsorship .register {
    background-color: var(--color-primary-100);
    position: relative;
    height: 450px;
    overflow-x: hidden;

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
    }

    a {
      margin-top: 25px;
      display: inline-block;
      font-size: 20px;
      font-weight: 400;
      letter-spacing: 1.5px;
      color: var(--color-secundary-100);
      position: relative;
      z-index: 1;
      text-shadow: 2px 2px black;
    }
  }

  main .sectionSponsorship .athlete {
    max-height: 648px;
    min-height: 320px;
    background-color: var(--color-gray-0);

    > div {
      transform: translateY(-90px);

      .title-home-2 {
        text-align: center;
      }

      ul {
        background-color: white;
        height: 344px;
        max-width: 827px;
        min-width: 344px;

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
  }

  footer {
    background-color: var(--color-primary-100);
    padding-top: 10px;
    padding-bottom: 10px;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

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
    }
  }
`;
