import styled from "styled-components";

export const DivEditUser = styled.div`

  & > form {
    display: flex;
    flex-wrap: wrap;
    gap: 63px;

    padding: 20px;
    overflow-x:auto;
    
    & > div.side-left, & > div.side-right {
      & > fieldset {
        border: none;

        & > label, legend,& > fieldset > label {
          color: var(--color-primary-100)
        }

        & > textarea{
          background-color: var(--color-primary-10);
        }
      & > input , & > fieldset > input{
        background-color: var(--color-primary-10);
      }
    }   
  }
 
`;
