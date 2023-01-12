import { StyledContainer } from "../../styles/Container";
import { StyledSideBarButtons } from "./style";

interface iSideBarButtonsProps {
  children: React.ReactNode;
}

export const SideBarButtons = ({ children }: iSideBarButtonsProps) => {
  return (
    <StyledSideBarButtons>
      <StyledContainer>{children}</StyledContainer>
    </StyledSideBarButtons>
  );
};
