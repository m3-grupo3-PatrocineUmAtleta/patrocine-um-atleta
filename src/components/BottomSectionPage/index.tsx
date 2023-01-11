import { StyledContainer } from "../../styles/Container";
import { BottomSectionStyle } from "./style";

interface iBottomSectionPageProps {
  children: React.ReactNode;
}
export const BottomSectionPage = ({ children }: iBottomSectionPageProps) => {
  return (
    <BottomSectionStyle>
      <StyledContainer>{children}</StyledContainer>
    </BottomSectionStyle>
  );
};
