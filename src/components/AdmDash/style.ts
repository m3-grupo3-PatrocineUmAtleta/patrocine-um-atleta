import styled from "styled-components";

export const StyledAdmDash = styled.div`
  background-color: var(--color-primary-100);
  position: relative;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledAsideButtons = styled.aside`
  position: sticky;
  bottom: 0;
  width: 100vw;
  max-width: 780px;
  overflow-x: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  button {
    border-radius: 10px;
    min-width: 100px;
    height: 100px;
    background-color: var(--color-primary-0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  button img {
    height: 40px;
    width: 40px;
    opacity: 0.5;
  }
  @media (min-width: 750px) {
    max-width: 235px;
    flex-wrap: wrap;
  }
`;
export const StyledSectionRender = styled.section`
  min-height: 320px;
  max-height: 332px;
  overflow-y: scroll;
  padding: 16px;
  width: 95%;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  top: -40px;

  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  div {
  }
`;
export const StyledHistory = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1285px;
  div {
    width: 230px;
    height: max-content;
    max-height: 300px;
    overflow-y: auto;
    border: 1px solid var(--color-gray-0);
    color: var(--color-gray-0);
  }
  .divTournaments div,
  .divDonations div {
    color: var(--color-gray-0);

    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .divTournaments ul,
  .divDonations ul {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px 0;
  }
`;
export const StyledInfoHistory = styled.span`
  height: 40px;
  width: 180px;
  background-color: var(--color-secundary-100);
  border-radius: 32px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  object-fit: contain;
  border: 2px solid var(--color-gray-0);
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
