import { ButtonsSidebar } from "../../components/ButtonsSidebar";
import { EmblemCard } from "../../components/EmblemCard";
import { Header } from "../../components/Header";
import { RenderContainerSection } from "../../components/RenderContainerSection";
import { TournamentCard } from "../../components/TournamentsCard";
import { StyledContainer } from "../../styles/Container";
import { AthletePageStyle } from "./style";
import InstituitionVector from "../../assets/img/InstituitionVector.svg";
import MediaVector from "../../assets/img/MediaVector.svg";
import BioVector from "../../assets/img/BioVector.svg";
import MessageVector from "../../assets/img/MessageVector.svg";
import TournamentVector from "../../assets/img/TournamentVector.svg";
import DonateVector from "../../assets/img/DonateVector.svg";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/User";
import { RenderContentSection } from "../../components/RenderContentSection";
import { ModalWrapper } from "../../components/Modal";

export const AthletePage = () => {
  const { buttonValue, user, openModal, settingsModal } =
    useContext(UserContext);
  useEffect(() => {}, [buttonValue]);
  return (
    <>
      {openModal && <ModalWrapper typeModal={settingsModal} />}
      <AthletePageStyle>
        <Header isHome={false} />
        <StyledContainer>
          <section>
            <EmblemCard imgUrl="" nickname="Joseph" />
            <ul>
              <TournamentCard
                date="9 jun 2023"
                nameTournament="Torneio estadual"
                locate="São Paulo - BR"
              />
              <TournamentCard
                date="9 jun 2023"
                nameTournament="Torneio estadual"
                locate="São Paulo - BR"
              />
              <TournamentCard
                date="9 jun 2023"
                nameTournament="Torneio estadual"
                locate="São Paulo - BR"
              />
            </ul>
          </section>
        </StyledContainer>
        <div>
          <StyledContainer>
            <RenderContainerSection>
              <RenderContentSection />
            </RenderContainerSection>
            <aside>
              <StyledContainer>
                <ButtonsSidebar img={InstituitionVector} text="Instituição" />
                <ButtonsSidebar img={MediaVector} text="Mídias" />
                <ButtonsSidebar img={BioVector} text="Bio" />
                <ButtonsSidebar img={MessageVector} text="Depoimentos" />
                <ButtonsSidebar img={TournamentVector} text="Torneios" />
                <ButtonsSidebar img={DonateVector} text="Doação" />
              </StyledContainer>
            </aside>
          </StyledContainer>
        </div>
      </AthletePageStyle>
    </>
  );
};
