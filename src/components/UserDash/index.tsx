import { ButtonsSidebar } from "../ButtonsSidebar";
import { HistoryCard } from "../HistoryCard";
import { StyledContainer } from "../../styles/Container";
import { StyledUserDash } from "./style";
import perfilIcon from "./../../assets/img/perfilIcon.png";
import todosAtletasIcon from "./../../assets/img/todosAtletasIcon.png";
import favIcon from "./../../assets/img/favIcon.png";
import patrocinadosIcon from "./../../assets/img/patrocinadosIcon.png";
import { AthleteCard } from "../AthleteCard";
import { Header } from "../Header";

export const UserDash = () => {
  return (
    <StyledUserDash>
      <Header isHome={false} />
      <div className="bg-blue"></div>
      <StyledContainer flex={true} className="container">
        <section className="donations-history">
          <h2 className="title-2 gray-0">Histórico de doações</h2>
          <ul className="ul-mobile">
            <HistoryCard name={"Pelé"} value={200} />
            <HistoryCard name={"Rivelino"} value={150} />
            <HistoryCard
              name={"Zico"}
              value={160}
              img={
                "https://www.algosobre.com.br/images/stories/assuntos/biografias/Zico.jpg"
              }
            />
          </ul>
          <ul className="ul-desktop">
            <AthleteCard
              athlete_id={1}
              img={
                "https://www.algosobre.com.br/images/stories/assuntos/biografias/Zico.jpg"
              }
              name="Zico"
              age={18}
              city="Santos"
            />
            <AthleteCard
              athlete_id={1}
              img="undefined"
              name="Pelé"
              age={18}
              city="Santos"
            />
            <AthleteCard
              athlete_id={1}
              img="undefined"
              name="Pelé"
              age={18}
              city="Santos"
            />
          </ul>
        </section>
        <section className="render-buttons"></section>

        <section className="sidebar">
          <ul>
            <li>
              <ButtonsSidebar text={"Profile"} img={perfilIcon} />
            </li>
            <li>
              <ButtonsSidebar text={"Todos atletas"} img={todosAtletasIcon} />
            </li>
            <li>
              <ButtonsSidebar text={"Favoritos"} img={favIcon} />
            </li>
            <li>
              <ButtonsSidebar text={"Patrocinados"} img={patrocinadosIcon} />
            </li>
          </ul>
        </section>
      </StyledContainer>
    </StyledUserDash>
  );
};
