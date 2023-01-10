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
import { getUserLogged } from "../../services/getUserLogged";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/User";

export const UserDash = () => {
  const { sponsored, setSponsored } = useContext(UserContext);
  
  useEffect(() => {
    const getSpon = async () => {
      return setSponsored( await getUserLogged())
    }
    getSpon()
  }, [])

    return (
    <StyledUserDash>
      <Header isHome={false} />
      <div className="bg-blue"></div>
      <StyledContainer flex={true} className="container">
        <section className="donations-history">
          <h2 className="title-2 gray-0">Histórico de doações</h2>
          <ul className="ul-mobile">
            {
              sponsored.length ? (
                sponsored.map((item) => {
                   return <HistoryCard key={item.athlete.id} id={item.athlete.id+""} name={item.athlete.nickname} value={item.value} img={item.athlete.imgUrl}/>
                  }).reverse().slice(0, 3)                
              ): 
              <h1>Você ainda não patrocinou nenhum atleta</h1>             
            }          
          </ul>
          <ul className="ul-desktop">
            {
              sponsored.length ? (
                sponsored.map((item) => {
                   return <AthleteCard key={item.athlete.id} athlete_id={item.athlete.id+""} img={item.athlete.imgUrl} name={item.athlete.nickname} age={item.athlete.age} city={item.athlete.city} isUserDash={true}/>
                  }).reverse().slice(0, 3)                
              ): 
              <h1>Você ainda não patrocinou nenhum atleta</h1>
            }

            {/* <AthleteCard
              athlete_id="1"
              img={
                "https://www.algosobre.com.br/images/stories/assuntos/biografias/Zico.jpg"
              }
              name="Zico"
              age={18}
              city="Santos"
            />
            <AthleteCard
              athlete_id="1"
              img="undefined"
              name="Pelé"
              age={18}
              city="Santos"
            />
            <AthleteCard
              athlete_id="1"
              img="undefined"
              name="Pelé"
              age={18}
              city="Santos"
            /> */}
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
