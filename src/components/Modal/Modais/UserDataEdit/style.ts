import styled from "styled-components";

export const DivEditUser = styled.div`
margin: 0 auto;

  & > form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    justify-content: center;

    padding: 20px;

    @media (min-width: 750px){
      gap: 60px;
    }
    
    & > div.side-left, & > div.side-right {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      @media (min-width: 750px){
        flex-wrap: nowrap;
        flex-direction: column;
      }
      
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

    & > .buttons{
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: space-evenly;

      width: 100%;

      & > button {
        max-width: 240px;
        width: 100%;
        height: 44.93px;
        background: var(--color-secundary-100);

        border: none;
        border-radius: 8px;
        color: var(--color-gray-0);

        @media (min-width: 750px) {
          gap: 63.74px;
          justify-content: space-evenly;
        }
      }
    }
  }

 .buttons{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-evenly;

    width: 100%;
    
    & > button {
      max-width: 240px;
      width: 100%;
      height: 44.93px;
      background: var(--color-secundary-100);

      border: none;
      border-radius: 8px;
      color: var(--color-gray-0);

      @media (min-width: 750px) {
        gap: 63.74px;
        justify-content: space-evenly;
      }
    }
  }
 
`;
