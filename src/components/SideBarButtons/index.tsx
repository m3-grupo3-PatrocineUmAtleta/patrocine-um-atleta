import { StyledContainer } from "../../styles/Container";
import { SideBarButtonsStyle } from "./style";

interface iSideBarButtonsProps {
  children: React.ReactNode;
}

export const SideBarButtons = ({ children }: iSideBarButtonsProps) => {
  return (
    <SideBarButtonsStyle>
      <StyledContainer>{children}</StyledContainer>
    </SideBarButtonsStyle>
  );
};
