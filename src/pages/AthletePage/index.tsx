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
import DonateVector from "../../assets/img/DonateVector.svg";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/User";
import { RenderContentSection } from "../../components/RenderContentSection";
import { ModalWrapper } from "../../components/Modal";
import { SideBarButtons } from "../../components/SideBarButtons";
import { BottomSectionPage } from "../../components/BottomSectionPage";
import { getAllUser } from "../../services/getAllUser";
import { ButtonSidebarFavorite } from "../../components/ButtonSidebarFavourite";

export const AthletePage = () => {
  const {
    openModal,
    settingsModal,
    buttonValue,
    setButtonValue,
    setContentAllUser,
    contentAllUser,
  } = useContext(UserContext);
  const storageAthlete: any = localStorage.getItem("@SelectedAthlete");
  const athlete = JSON.parse(storageAthlete);
  const allUser = async () => {
    const getUsers = await getAllUser();

    setContentAllUser(getUsers);
  };
  useEffect(() => {
    setButtonValue("Bio");
    allUser();
  }, []);

  console.log(contentAllUser);
  console.log(athlete);

  return (
    <>
      {openModal && <ModalWrapper typeModal={settingsModal} />}
      <AthletePageStyle>
        <Header isHome={false} />
        <StyledContainer>
          <section className="sectionTournament">
            <EmblemCard imgUrl={athlete.imgUrl} nickname={athlete.nickname} />
            <ul>
              <>
                {contentAllUser?.tournaments?.map((athleteInfo) => {
                  return (
                    <TournamentCard
                      key={athleteInfo.id}
                      tournamentImg={athleteInfo.imgUrl}
                      date={athleteInfo.date}
                      nameTournament={athleteInfo.name}
                      locate={athleteInfo.location}
                    />
                  );
                })}
              </>
            </ul>
          </section>
        </StyledContainer>
        <BottomSectionPage>
          <RenderContainerSection size="780px">
            <RenderContentSection />
          </RenderContainerSection>
          <SideBarButtons>
            <ButtonsSidebar img={InstituitionVector} text="Instituição" />
            <ButtonsSidebar img={MediaVector} text="Mídias" />
            <ButtonsSidebar img={BioVector} text="Bio" />
            <ButtonsSidebar img={MessageVector} text="Depoimentos" />
            <ButtonSidebarFavorite />
            <ButtonsSidebar img={DonateVector} text="Doação" />
          </SideBarButtons>
        </BottomSectionPage>
      </AthletePageStyle>
    </>
  );
};
