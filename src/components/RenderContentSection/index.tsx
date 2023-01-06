import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { AllAthletes } from "./components/AllAthletes";
import { AthleteRegister } from "./components/AthleteRegister";
import { Athletes } from "./components/Athletes";
import { Bio } from "./components/Bio";
import { Depositions } from "./components/Depositions";
import { Donations } from "./components/Donations";
import { Favourites } from "./components/Favourites";
import { Infos } from "./components/Infos";
import { Institution } from "./components/Institution";
import { Medias } from "./components/Medias";
import { Profile } from "./components/Profile";
import { Sponsored } from "./components/Sponsored";
import { Tournaments } from "./components/Tournaments";

export const RenderContentSection = () => {
  const { buttonValue, user } = useContext(UserContext);

  if(user) {
    if (buttonValue === "Perfil") {
      return (
        <Profile
          name=""
          adress=""
          bio=""
          contacts={{}}
          favourites={[]}
          sponsoredAthletes={[]}
        />
      );
    }
    if (buttonValue === "Todos atletas") {
      return <AllAthletes />;
    }
    if (buttonValue === "Favoritos") {
      return (
        <Favourites
          adress=""
          name=""
          bio=""
          contacts={{}}
          favourites={[]}
          sponsoredAthletes={[]}
        />
      );
    }
    if (buttonValue === "Patrocinados") {
      return (
        <Sponsored
          adress=""
          name=""
          bio=""
          contacts={{}}
          favourites={[]}
          sponsoredAthletes={[]}
        />
      );
    }
  }

  if (buttonValue === "Perfil") {
    return (
      <Profile
        name=""
        adress=""
        bio=""
        contacts={{}}
        favourites={[]}
        sponsoredAthletes={[]}
      />
    );
  }
  if (buttonValue === "Informações") {
    return <Infos />;
  }
  if (buttonValue === "Torneios") {
    return <Tournaments tournamentsList={[]} />;
  }
  if (buttonValue === "Atletas") {
    return (
      <Athletes
        aboutUs=""
        image=""
        institutionAthletes={[]}
        location=""
        name=""
      />
    );
  }
  if (buttonValue === "Registrar") {
    return <AthleteRegister />;
  }
  if (buttonValue === "Instituição") {
    return (
      <Institution
        aboutUs=""
        image=""
        institutionAthletes={[]}
        location=""
        name=""
      />
    );
  }
  if (buttonValue === "Mídias") {
    return <Medias />;
  }
  if (buttonValue === "Bio") {
    return <Bio bio="" hometown="" />;
  }
  if (buttonValue === "Depoimentos") {
    return <Depositions depositionList={[]} />;
  }
  if (buttonValue === "Doação") {
    return <Donations />;
  }

  return <section></section>;
};
