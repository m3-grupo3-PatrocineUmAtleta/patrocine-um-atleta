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
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/User";
import { RenderContentSection } from "../../components/RenderContentSection";
import { ModalWrapper } from "../../components/Modal";
import { SideBarButtons } from "../../components/SideBarButtons";
import { BottomSectionPage } from "../../components/BottomSectionPage";
import { getAllUser } from "../../services/getUserAdmin";
import { iTournament } from "../../providers/User/interfaces";
import { getTournaments } from "../../services/getTournaments";
import { ButtonSidebarFavorite } from "../../components/ButtonSideBarFavorite";
import { setFavorites } from "../../services/setFavorites";
import { iAthlete } from "../../providers/User/interfaces";
import { ToastSucess } from "../../components/Toast";

export const AthletePage = () => {
  const {
    openModal,
    settingsModal,
    setButtonValue,
    setContentAllUser,
    contentAllUser,
    user,
    setUser,
  } = useContext(UserContext);

  const storageAthlete: string | null =
    localStorage.getItem("@SelectedAthlete");

  const athlete = storageAthlete && JSON.parse(storageAthlete);
  const [isFavorite, setIsFavorite] = useState(false);

  const allUser = async () => {
    const getUsers = await getAllUser();

    setContentAllUser(getUsers);
  };

  const [tournaments, setTournaments] = useState<iTournament[]>([]);

  const getTournamentsAPI = async () => {
    const tournaments = await getTournaments();
    tournaments && setTournaments(tournaments);
  };

  useEffect(() => {
    setButtonValue("Bio");
    getTournamentsAPI();
    allUser();
  }, []);

  useEffect(() => {
    const fav: boolean | undefined = user?.favorites?.some(
      (person) => person.id === athlete.id
    );

    setIsFavorite(fav || false);
  }, [user]);

  const handleClick = async () => {
    if (isFavorite) {
      const personIndex: number =
        user?.favorites?.findIndex((person) => person.id === athlete.id) || -1;

      const favoriteList: iAthlete[] = [...(user?.favorites || [])];

      favoriteList.splice(personIndex, 1);

      const token = localStorage.getItem("@Token");
      const userResponse = await setFavorites(favoriteList, user?.id, token);

      setUser(userResponse);
      ToastSucess("Atleta removido dos favoritos com sucesso!");
    } else {
      const favoriteList: iAthlete[] = [...(user?.favorites || []), athlete];
      const token = localStorage.getItem("@Token");
      const userResponse = await setFavorites(favoriteList, user?.id, token);

      setUser(userResponse);
      ToastSucess("Atleta adicionado aos favoritos com sucesso!");
    }
  };

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
                {tournaments
                  .filter(
                    (tournament) =>
                      tournament.participants?.find(
                        (idAthle) => idAthle.athleteId === athlete.id
                      )?.athleteId === athlete.id
                  )
                  .map((tournament) => (
                    <TournamentCard
                      key={tournament.id}
                      tournamentImg={tournament.imgUrl}
                      date={tournament.date}
                      nameTournament={tournament.name}
                      locate={tournament.location}
                    />
                  ))}
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
            <ButtonSidebarFavorite
              onClick={handleClick}
              isFavorite={isFavorite}
            />
            <ButtonsSidebar img={DonateVector} text="Doação" />
          </SideBarButtons>
        </BottomSectionPage>
      </AthletePageStyle>
    </>
  );
};
