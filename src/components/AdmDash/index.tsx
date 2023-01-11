import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/User";
import { ButtonsSidebar } from "../ButtonsSidebar";
import { Header } from "../Header";
import {
  AdmDashStyle,
  StyledAdmDash,
  StyledAsideButtons,
  StyledHistory,
  StyledInfoHistory,
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
import { getAllAthletes } from "../../services/getAllAthletes";
import { BottomSectionPage } from "../BottomSectionPage";
import { SideBarButtons } from "../SideBarButtons";

export const AdmDash = () => {
  const {
    athletes,
    setAthletes,
    user,
    buttonValue,
    openModal,
    settingsModal,
    selectedAtlhete,
  } = useContext(UserContext);

  const getAthletes = async () => {
    const getApiAthletes = await getAllAthletes();
    setAthletes(getApiAthletes);
  };

  useEffect(() => {}, [buttonValue]);
  useEffect(() => {
    getAthletes();
  }, []);

  const donationsList = athletes.filter((athlete) => {
    if (athlete?.donates?.length && athlete) {
      return athlete;
    } else {
      return null;
    }
  });

  return (
    <>
      {openModal && (
        <ModalWrapper typeModal={settingsModal} select={selectedAtlhete} />
      )}
      <Header isHome={false}></Header>
      <AdmDashStyle>
        <StyledAdmDash>
          <StyledHistory>
            <div className="divTournaments">
              <div>
                <h3>Torneios</h3>
              </div>
              <ul>
                {user?.tournaments?.map((tournament) => {
                  return (
                    <StyledInfoHistory key={tournament.name}>
                      <img src={tournament.imgUrl} alt={tournament.name} />
                      {tournament.name}
                    </StyledInfoHistory>
                  );
                })}
              </ul>
            </div>
            <div className="divDonations">
              <div>
                <h3>Histórico de doações</h3>
              </div>
              <ul>
                {donationsList.length > 0 ? (
                  athletes.map((athlete) => {
                    return athlete.donates?.map((donation) => {
                      return (
                        <li key={athlete.id}>
                          <StyledInfoHistory>
                            {donation?.athlete?.name}
                          </StyledInfoHistory>
                          <StyledInfoHistory>
                            {donation?.amount}
                          </StyledInfoHistory>
                        </li>
                      );
                    });
                  })
                ) : (
                  <StyledInfoHistory>Ainda não há doações</StyledInfoHistory>
                )}
              </ul>
            </div>
          </StyledHistory>
        </StyledAdmDash>
        <BottomSectionPage>
          <RenderContainerSection size="810px">
            <RenderContentSection />
          </RenderContainerSection>
          <SideBarButtons>
            <ButtonsSidebar text="Perfil" img={perfilImg}></ButtonsSidebar>
            <ButtonsSidebar text="Informações" img={infoImg}></ButtonsSidebar>
            <ButtonsSidebar
              text="Torneios"
              img={tournamentImg}
            ></ButtonsSidebar>
            <ButtonsSidebar text="Atletas" img={athletesImg}></ButtonsSidebar>
            <ButtonsSidebar text="Registrar" img={registerImg}></ButtonsSidebar>
          </SideBarButtons>
        </BottomSectionPage>
      </AdmDashStyle>
    </>
  );
};
