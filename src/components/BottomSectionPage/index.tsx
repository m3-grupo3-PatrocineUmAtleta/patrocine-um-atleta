import { StyledContainer } from "../../styles/Container";
import { StyledBottomSection } from "./style";

interface iBottomSectionPageProps {
  children: React.ReactNode;
}
export const BottomSectionPage = ({ children }: iBottomSectionPageProps) => {
  return (
    <StyledBottomSection>
      <StyledContainer>{children}</StyledContainer>
    </StyledBottomSection>
  );
};
