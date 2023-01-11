import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary-100: #031059;
    --color-primary-50: #2C3D73;
    --color-primary-30: #979CB7;
    --color-primary-10: #D2D6DF;
    --color-primary-0: #D9DDE4;
    --color-secundary-100: #F24405;
    --color-secundary-50: #F2836B;
    --color-gray-100: #333333;
    --color-gray-50: #828282;
    --color-gray-20: #E0E0E0;
    --color-gray-0: #F2F2F2;
    --color-information: #155BCB;
    --color-success: #168821;
    --color-warning: #FFCD07;
    --color-negative: #E60000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "inter", sans-serif;
  }

  ul, 
  ol {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  ::-webkit-scrollbar {
    appearance: none;
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-secundary-50);
    /* border: 1px solid var(--color-secundary-50); */
    border-radius: 10px;
    box-shadow: inset 0px 0px 2px 2px rgba(0, 0, 0, 0.60);

    &:hover {
      background-color: #f26546;
    }
  }

  ::-webkit-scrollbar-track {
    background-color: var(--color-primary-10);
    box-shadow: inset 0px 0px 2px 2px rgba(0, 0, 0, 0.60);
  }
`;

export default GlobalStyles;
