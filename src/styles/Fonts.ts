import { createGlobalStyle } from "styled-components";

const Fonts = createGlobalStyle`
  .title-1 {
    font-weight: 700;
    font-size: 1.625rem;
    line-height: 130%;
  }
  .title-2 {
    font-weight: 700;
    font-size: 1.375rem;
    line-height: 130%;
  }
  .title-3 {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
  }
  .title-4 {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 170%;
  }
  .headline {
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;
  }
  .headline-600 {
    font-weight: 600;
    font-size: 1rem;
    line-height: 150%;
  }
  .body {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 170%;
  }
  .body-600 {
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 170%;
  }
  .caption {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 130%;
  }

  .title-home {
    font-weight: 700;
    font-size: 28px;
    line-height: 130%;
  }

  .title-home-2 {
    font-weight: 700;
    font-size: 22px;
    line-height: 130%;
  }

  .text-body {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 150%;
  }

  .text-sideButton {
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 170%;
  }

  .gray-100 {
    color: var(--color-gray-100);
  }
  .gray-50 {
    color: var(--color-gray-50);
  }
  .gray-20 {
    color: var(--color-gray-20);
  }
  .gray-0 {
    color: var(--color-gray-0);
  }
  
`;

export default Fonts;
