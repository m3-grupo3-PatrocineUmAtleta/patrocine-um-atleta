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

export const UserDash = () => {
  const {
    filterAthletes,
    sponsored,
    setSponsored,
    openModal,
    settingsModal,
    selectedAtlhete,
  } = useContext(UserContext);

  useEffect(() => {
    const getSpon = async () => {
      return setSponsored(await getUserLogged());
    };
    getSpon();
  }, []);

  //comentarios

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
            {sponsored?.length ? (
              sponsored
                .map((item) => {
                  return (
                    <HistoryCard
                      key={item.athlete.id}
                      id={item.athlete.id + ""}
                      name={item.athlete.nickname}
                      value={item.value}
                      img={item.athlete.imgUrl}
                    />
                  );
                })
                .reverse()
                .slice(0, 3)
            ) : (
              <li className="headline gray-0 text-center">
                Você ainda não patrocinou nenhum atleta
              </li>
            )}
          </ul>

          <ul className="ul-desktop">
            {sponsored?.length ? (
              sponsored
                .map((item) => {
                  return (
                    <AthleteCard
                      key={item.athlete.id}
                      athlete_id={item.athlete.id + ""}
                      img={item.athlete.imgUrl}
                      name={item.athlete.nickname}
                      age={item.athlete.age}
                      value={item.value}
                      isUserDash={true}
                    />
                  );
                })
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
        <RenderContainerSection size="700px">
          <RenderContentSection>
            {filterAthletes.length > 0 &&
              filterAthletes.map((athlete) => {
                return (
                  <AthleteCard
                    athlete_id={athlete.id}
                    img={athlete.imgUrl}
                    name={athlete.name}
                    age={athlete.age}
                    city={athlete.city}
                    bio={athlete.bio}
                    isAdmin={false}
                    key={athlete.id}
                  />
                );
              })}
          </RenderContentSection>
        </RenderContainerSection>
        <SideBarButtons>
          <ButtonsSidebar text={"Profile"} img={perfilIcon} />
          <ButtonsSidebar text={"Favoritos"} img={favIcon} />
          <ButtonsSidebar text={"Patrocinados"} img={patrocinadosIcon} />
          <ButtonsSidebar text={"Todos atletas"} img={todosAtletasIcon} />
        </SideBarButtons>
      </BottomSectionPage>
    </StyledUserDash>
  );
};
