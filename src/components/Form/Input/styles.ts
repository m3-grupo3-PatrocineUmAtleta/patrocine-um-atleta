import styled, { css } from "styled-components";

interface iInputText {
  borderColor?: string;
  validColor?: string;
  type?: string;
  height?: string;
}

export const FieldsetInput = styled.fieldset<iInputText>`
  width: 100%;
  display: flex;
  flex-direction: column;

  background: transparent;
  border-radius: 4px;
  border: none;

  ${({ type, height }) => {
    if (type === "textarea") {
      if (height) {
        return css`
          height: ${height};
        `;
      } else {
        return css`
          height: 135px;
        `;
      }
    } else {
      return css`
        height: 70px;
      `;
    }
  }}

  & > textarea {
    max-width: 276px;
    width: 100%;
    border-radius: 4px;
  }

  & > input {
    max-width: 276px;
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
    pointer-events: none;
    transition: 0.5s;

    color: var(--color-gray-0);
  }

  & > p {
    color: var(--color-negative);
  }

  @media (min-width: 750px) {
    max-width: 230px;
  }
`;
