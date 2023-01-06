import styled, { css } from "styled-components";

interface iInputText {
  borderColor?: string;
  validColor?: string;
  type?: string;
}

export const FieldsetInput = styled.fieldset<iInputText>`
  min-width: 277.26px;
  max-width: 287px;
  width: 100%;

  background: transparent;
  border-radius: 4px;
  border: none;

  ${({ type }) => {
    if (type === "textarea") {
      return css`
        height: 135px;
      `;
    } else {
      return css`
        height: 70px;
      `;
    }
  }}
  // position: relative;

  & > textarea {
    border-radius: 4px;
  }

  & > input {
    width: 100%;
    height: 43.86px;
    padding: 1.125rem;

    border-radius: 4px;
    background: var(--color-gray-0);
    border: none;
    outline: none;

    ${({ validColor }) => {
      if (validColor) {
        return css`
          border: 0.125rem solid var(${validColor});
        `;
      } else {
        return css`
          border: 2px solid var(--color-gray-0);
        `;
      }
    }}
  }

  & > label {
    // position: absolute;
    // left: 0;
    // top: 0;
    // padding: 0.8rem;
    pointer-events: none;
    transition: 0.5s;

    color: var(--color-gray-0);
  }

  // & > textarea:valid ~ label,
  // & > textarea:focus ~ label {
  //   transform: translateX(0) translateY(-25px);
  //   background: transparent;
  //   padding: 5px;
  //   color: var(--color-gray-0);
  // }
  // & > textarea:focus,
  // & > textarea:valid {
  //   background: var(--color-gray-0);
  // }

  // & > input:valid ~ label,
  // & > input:focus ~ label {
  //   transform: translateX(0) translateY(-25px);
  //   background: transparent;
  //   padding: 5px;
  //   color: var(--color-gray-0);
  // }
  // & > input:focus,
  // & > input:valid {
  //   background: var(--color-gray-0);
  // }

  & > p {
    color: var(--color-negative);
  }
`;
