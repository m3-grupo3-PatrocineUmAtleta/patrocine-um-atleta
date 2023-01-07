import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const StyledContainer = styled(ToastContainer)`
  .Toastify__progress-bar--success {
    background: var(--color-sucess);
  }
  .Toastify__progress-bar--error {
    background: var(--color-negative);
  }
  .Toastify__progress-bar--warning {
    background: var(--color-warning);
  }
  .Toastify__progress-bar--info {
    background: var(--color-information);
  }
  .Toastify__toast {
    background: var(--color-grey0);
    box-shadow: 0rem 0.25rem 2.5rem -1.25rem var(--shadow);
  }
  .Toastify__toast-body {
    color: var(--color-grey600);
    font-weight: 700;
    font-size: 14px;
  }
  .Toastify__close-button > svg {
    color: var(--color-grey-1);
  }
`;
