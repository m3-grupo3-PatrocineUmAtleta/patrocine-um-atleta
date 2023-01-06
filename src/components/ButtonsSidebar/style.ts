import styled from "styled-components";
import { ButtonsSidebar } from ".";

export const StyledButtonsSidebar = styled(ButtonsSidebar)`
  border-radius: 10px;
  width: 100px;
  height: 100px;
  background-color: var(--color-primary-0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 40px;
    width: 40px;
    opacity: 0.5;
  }
  h4 {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    background: var(--color-gray-0);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px 10px 0px 10px;
    border-bottom: 5px solid var(--color-secundary);

    img {
      opacity: 1;
    }
    h4 {
      color: rgba(0, 0, 0, 1);
    }
  }
`