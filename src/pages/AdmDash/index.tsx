import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import { ButtonsSidebar } from "../../components/ButtonsSidebar";
import { Header } from "../../components/Header";
import {
  StyledAdmDashWrapper,
  StyledAdmDash,
  StyledHistory,
  StyledInfoHistory,
} from "./style";
import perfilImg from "../../assets/img/admDash/asideButtonPerfil.png";
import infoImg from "../../assets/img/admDash/asideButtonInfo.png";
import tournamentImg from "../../assets/img/admDash/asideButtonTournament.png";
import athletesImg from "../../assets/img/admDash/asideButtonAthlete.png";
import registerImg from "../../assets/img/admDash/asideButtonEdit.png";
import { RenderContentSection } from "../../components/RenderContentSection";
import { ModalWrapper } from "../../components/Modal";
import { RenderContainerSection } from "../../components/RenderContainerSection";
import { getAllAthletes } from "../../services/getAllAthletes";
import { BottomSectionPage } from "../../components/BottomSectionPage";
import { SideBarButtons } from "../../components/SideBarButtons";
import { getDonations, iResponseDonates } from "../../services/getDonates";
import { getTournaments } from "../../services/getTournaments";
import { iTournament } from "../../UserContext/interfaces";

export const AdmDash = () => {
  const [listDonations, setListDonations] = useState<
    iResponseDonates[] | undefined
  >([]);
  const [tournaments, setTournaments] = useState<iTournament[]>([]);
  const {
    athletes,
    setAthletes,
    buttonValue,
    openModal,
    settingsModal,
    selectedAtlhete,
  } = useContext(UserContext);

  const getAthletes = async () => {
    const getApiAthletes = await getAllAthletes();
    getApiAthletes && setAthletes(getApiAthletes);
  };

  const getTournamentsAPI = async () => {
    const tournaments = await getTournaments();
    tournaments && setTournaments(tournaments);
  };

  useEffect(() => {}, [buttonValue]);

  useEffect(() => {
    getAthletes();
    donationsList();
    getTournamentsAPI();
  }, []);

  const donationsList = async () => {
    const list = await getDonations();
    list && setListDonations(list);
  };

  return (
    <>
      {openModal && (
        <ModalWrapper typeModal={settingsModal} select={selectedAtlhete} />
      )}
      <Header isHome={false}></Header>
      <StyledAdmDashWrapper>
        <StyledAdmDash>
          <StyledHistory>
            <div className="divTournaments">
              <div>
                <h3>Torneios</h3>
              </div>
              <ul>
                {tournaments
                  ?.map((tournament) => {
                    return (
                      <StyledInfoHistory key={tournament.id}>
                        <img src={tournament.imgUrl} alt={tournament.name} />
                        {tournament.name}
                      </StyledInfoHistory>
                    );
                  })
                  .reverse()
                  .slice(0, 4)}
              </ul>
            </div>
            <div className="divDonations">
              <div>
                <h3>Histórico de doações</h3>
              </div>
              <ul>
                {listDonations ? (
                  listDonations
                    .map((donate) => {
                      return (
                        <li key={donate.id}>
                          <StyledInfoHistory>
                            {
                              athletes?.find(
                                (athlete) => athlete.id === donate.athleteId
                              )?.name
                            }
                            {"-"}
                            {donate.amount}
                          </StyledInfoHistory>
                        </li>
                      );
                    })
                    .reverse()
                    .slice(0, 4)
                ) : (
                  <StyledInfoHistory>Ainda não há doações</StyledInfoHistory>
                )}
              </ul>
            </div>
          </StyledHistory>
        </StyledAdmDash>
        <BottomSectionPage>
          <RenderContainerSection size="810px">
            <RenderContentSection></RenderContentSection>
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
      </StyledAdmDashWrapper>
    </>
  );
};
