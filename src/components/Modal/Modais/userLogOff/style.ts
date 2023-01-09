import styled from "styled-components";

export const DivUserLogOff = styled.div`
  & > div.modalBody {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    & > div.divLocal {
      display: flex;
      gap: 12px;
      align-items: center;
    }

    & > div.aboutAthelte {
      & > h2 {
        margin-bottom: 15px;
      }

      & > span.blur {
        filter: blur(3px);
      }
    }
    & > a {
      display: block;
      margin-top: 10px;
      padding-top: 10px;

      width: 139px;
      height: 37px;

      text-align: center;
      text-decoration: none;
      color: var(--color-gray-0);

      background: var(--color-secundary-100);
      border-radius: 5px;
    }
  }
`;
