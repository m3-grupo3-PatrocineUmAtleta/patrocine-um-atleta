import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/User";
import { ButtonsSidebar } from "../ButtonsSidebar";
import { Header } from "../Header";
import {
  StyledAdmDash,
  StyledAsideButtons,
  StyledTournamentHistory,
} from "./style";
import perfilImg from "../../assets/img/admDash/asideButtonPerfil.png";
import infoImg from "../../assets/img/admDash/asideButtonInfo.png";
import tournamentImg from "../../assets/img/admDash/asideButtonTournament.png";
import athletesImg from "../../assets/img/admDash/asideButtonAthlete.png";
import registerImg from "../../assets/img/admDash/asideButtonEdit.png";
import { StyledContainer } from "../../styles/Container";
import { RenderContentSection } from "../RenderContentSection";
import { ModalWrapper } from "../Modal";
import { RenderContainerSection } from "../RenderContainerSection";

export const AdmDash = () => {
  const { user, buttonValue, openModal, settingsModal, selectedAtlhete } =
    useContext(UserContext);

  useEffect(() => {}, [buttonValue]);

  return (
    <>
      {openModal && (
        <ModalWrapper typeModal={settingsModal} select={selectedAtlhete} />
      )}
      <StyledAdmDash>
        <Header isHome={false}></Header>
        <StyledContainer>
          <StyledTournamentHistory></StyledTournamentHistory>
        </StyledContainer>
      </StyledAdmDash>
      <StyledContainer>
        <div className="rowReverse">
          <RenderContainerSection size="810px">
            <RenderContentSection />
          </RenderContainerSection>
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
