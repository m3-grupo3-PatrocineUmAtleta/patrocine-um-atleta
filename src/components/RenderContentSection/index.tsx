import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/User";
import { AthleteRegister } from "./components/AthleteRegister";
import { Athletes } from "./components/Athletes";
import { Bio } from "./components/Bio";
import { Depositions } from "./components/Depositions/index";
import { Donations } from "./components/Donations";
import { Favourites } from "./components/Favourites";
import { Infos } from "./components/Infos";
import { Institution } from "./components/Institution";
import { Medias } from "./components/Medias";
import { Profile } from "./components/Profile";
import { Sponsored } from "./components/Sponsored/Sponsored";
import { Tournaments } from "./components/Tournaments";

export const RenderContentSection = () => {
  const { buttonValue, user, finalyDeps, listDonations } =
    useContext(UserContext);
  const storageAthlete: any = localStorage.getItem("@SelectedAthlete");
  const athlete = JSON.parse(storageAthlete);

  if (buttonValue === "Perfil") {
    return <Profile />;
  }
  if (buttonValue === "Todos atletas") {
    return <Athletes />;
  }
  if (buttonValue === "Favoritos") {
    return <Favourites favourites={[]} />;
  }
  if (buttonValue === "Patrocinados") {
    return <Sponsored donatesList={listDonations} />;
  }

  if (buttonValue === "Perfil") {
    return <Profile />;
  }
  if (buttonValue === "Informações") {
    return <Infos />;
  }
  if (buttonValue === "Torneios") {
    return <Tournaments />;
  }
  if (buttonValue === "Atletas") {
    return <Athletes />;
  }
  if (buttonValue === "Registrar") {
    return <AthleteRegister />;
  }
  if (buttonValue === "Instituição") {
    return <Institution />;
  }
  if (buttonValue === "Mídias") {
    return (
      <Medias
        image=""
        facebook={athlete.medias?.facebook}
        instagram={athlete.medias?.instagram}
        twitter={athlete.medias?.twitter}
      />
    );
  }
  if (buttonValue === "Bio") {
    return <Bio bio={athlete.bio} city={athlete.city} />;
  }
  if (buttonValue === "Depoimentos") {
    return <Depositions depositionList={finalyDeps} />;
  }
  if (buttonValue === "Doação") {
    return <Donations />;
  }

  return <section></section>;
};
