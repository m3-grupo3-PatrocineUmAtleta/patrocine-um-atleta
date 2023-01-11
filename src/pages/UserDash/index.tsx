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

export const UserDash = () => {
  const { sponsored, setSponsored, openModal, settingsModal, selectedAtlhete } =
    useContext(UserContext);

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
        <RenderContainerSection size="700px">
          <RenderContentSection />
        </RenderContainerSection>

        <section className="sidebar">
          <ul>
            <li>
              <ButtonsSidebar text={"Profile"} img={perfilIcon} />
            </li>
            <li>
              <ButtonsSidebar text={"Favoritos"} img={favIcon} />
            </li>
            <li>
              <ButtonsSidebar text={"Patrocinados"} img={patrocinadosIcon} />
            </li>
            <li>
              <ButtonsSidebar text={"Todos atletas"} img={todosAtletasIcon} />
            </li>
          </ul>
        </section>
      </StyledContainer>
    </StyledUserDash>
  );
};
