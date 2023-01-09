import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/User";
import { ButtonsSidebar } from "../ButtonsSidebar";
import { Header } from "../Header";
import {
  StyledAdmDash,
  StyledAsideButtons,
  StyledSectionRender,
} from "./style";
import perfilImg from "../../assets/img/admDash/asideButtonPerfil.png";
import infoImg from "../../assets/img/admDash/asideButtonInfo.png";
import tournamentImg from "../../assets/img/admDash/asideButtonTournament.png";
import athletesImg from "../../assets/img/admDash/asideButtonAthlete.png";
import registerImg from "../../assets/img/admDash/asideButtonEdit.png";
import { StyledContainer } from "../../styles/Container";
import { RenderContentSection } from "../RenderContentSection";

export const AdmDash = () => {
  const { user, buttonValue } = useContext(UserContext);

  useEffect(() => {}, [buttonValue]);
  return (
    <>
      <StyledAdmDash>
        <Header isHome={false}></Header>
      </StyledAdmDash>
      <StyledContainer>
        <div>
          <StyledSectionRender>
            <RenderContentSection></RenderContentSection>
          </StyledSectionRender>
          <StyledAsideButtons>
            <ButtonsSidebar text="Perfil" img={perfilImg}></ButtonsSidebar>
            <ButtonsSidebar text="Informações" img={infoImg}></ButtonsSidebar>
            <ButtonsSidebar
              text="Torneios"
              img={tournamentImg}
            ></ButtonsSidebar>
            <ButtonsSidebar text="Atletas" img={athletesImg}></ButtonsSidebar>
            <ButtonsSidebar text="Registrar" img={registerImg}></ButtonsSidebar>
          </StyledAsideButtons>
        </div>
      </StyledContainer>
    </>
  );
};
