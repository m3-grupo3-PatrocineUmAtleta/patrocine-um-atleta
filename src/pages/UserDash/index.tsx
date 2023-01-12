import { ButtonsSidebar } from "../../components/ButtonsSidebar";
import { HistoryCard } from "../../components/HistoryCard";
import { StyledContainer } from "../../styles/Container";
import { StyledUserDash } from "./style";
import perfilIcon from "./../../assets/img/perfilIcon.png";
import todosAtletasIcon from "./../../assets/img/todosAtletasIcon.png";
import favIcon from "./../../assets/img/favIcon.png";
import patrocinadosIcon from "./../../assets/img/patrocinadosIcon.png";
import { AthleteCard } from "../../components/AthleteCard";
import { Header } from "../../components/Header";
import { getUserLogged } from "../../services/getUserLogged";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/User";
import { RenderContainerSection } from "../../components/RenderContainerSection";
import { RenderContentSection } from "../../components/RenderContentSection";
import { ModalWrapper } from "../../components/Modal";
import { BottomSectionPage } from "../../components/BottomSectionPage";
import { SideBarButtons } from "../../components/SideBarButtons";
import { getDonations, iResponseDonates } from "../../services/getDonates";
import { getAllAthletes } from "../../services/getAllAthletes";

export const UserDash = () => {
  const {
    athletes,
    setAthletes,
    user,
    filterAthletes,
    setSponsored,
    openModal,
    settingsModal,
    selectedAtlhete,
  } = useContext(UserContext);

  const [listDonations, setListDonations] = useState<
    iResponseDonates[] | undefined
  >([]);

  const donationsList = async () => {
    const list = await getDonations();
    list && setListDonations(list);
  };

  const getAthle = async () => {
    const allAthletes = await getAllAthletes();
    allAthletes && setAthletes(allAthletes);
  };
  useEffect(() => {
    getAthle();
  }, []);

  useEffect(() => {
    const getSpon = async () => {
      return setSponsored(await getUserLogged());
    };
    getSpon();
  }, []);

  useEffect(() => {
    donationsList();
  }, []);

  return (
    <StyledUserDash>
      {openModal && (
        <ModalWrapper typeModal={settingsModal} select={selectedAtlhete} />
      )}
      <Header isHome={false} />
      <div className="bg-blue"></div>
      <StyledContainer flex={true} className="container">
        <section className="donations-history">
          <h2 className="title-2 gray-0">Histórico de doações</h2>
          <ul className="ul-mobile">
            {listDonations ? (
              listDonations
                .filter((donates) => Number(donates.userId) === user?.id)
                .map((donate) => (
                  <HistoryCard
                    key={donate.id}
                    id={donate.id + ""}
                    name={
                      athletes &&
                      athletes.find(
                        (athlete) => athlete.id === donate.athleteId
                      )?.nickname
                    }
                    value={Number(donate.amount)}
                    img={
                      athletes &&
                      athletes.find(
                        (athlete) => athlete.id === donate.athleteId
                      )?.imgUrl
                    }
                  />
                ))
            ) : (
              <li className="headline gray-0 text-center">
                Você ainda não patrocinou nenhum atleta
              </li>
            )}
          </ul>

          <ul className="ul-desktop">
            {listDonations ? (
              listDonations
                .filter((donates) => Number(donates.userId) === user?.id)
                .map((donate) => (
                  <AthleteCard
                    key={donate.id}
                    athlete_id={donate.athleteId}
                    name={
                      athletes &&
                      athletes.find(
                        (athlete) => athlete.id === donate.athleteId
                      )?.nickname
                    }
                    value={Number(donate.amount)}
                    img={
                      athletes &&
                      athletes.find(
                        (athlete) => athlete.id === donate.athleteId
                      )?.imgUrl
                    }
                    isUserDash={true}
                    age={
                      athletes &&
                      athletes.find(
                        (athlete) => athlete.id === donate.athleteId
                      )?.age
                    }
                  />
                ))
                .reverse()
                .slice(0, 3)
            ) : (
              <li className="headline gray-0 center">
                Você ainda não patrocinou nenhum atleta
              </li>
            )}
          </ul>
        </section>

        {/* <section className="render-buttons"></section> */}
      </StyledContainer>
      <BottomSectionPage>
        <RenderContainerSection size="810px">
          <RenderContentSection></RenderContentSection>
        </RenderContainerSection>
        <SideBarButtons>
          <ButtonsSidebar text={"Perfil"} img={perfilIcon} />
          <ButtonsSidebar text={"Favoritos"} img={favIcon} />
          <ButtonsSidebar text={"Patrocinados"} img={patrocinadosIcon} />
          <ButtonsSidebar text={"Atletas"} img={todosAtletasIcon} />
        </SideBarButtons>
      </BottomSectionPage>
    </StyledUserDash>
  );
};
