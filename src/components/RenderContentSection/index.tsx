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
  const { buttonValue } = useContext(UserContext);

  if (buttonValue === "Perfil") (
    <Profile />
  )
  if (buttonValue === "Todos atletas") (
    <AllAthletes />
  )
  if (buttonValue === "Favoritos") (
    <Favourites />
  )
  if (buttonValue === "Patrocinados") (
    <Sponsored />
  )
  if (buttonValue === "Informações") (
    <Infos />
  )
  if (buttonValue === "Torneios") (
    <Tournaments />
  )
  if (buttonValue === "Atletas") (
    <Athletes />
  )
  if (buttonValue === "Registrar") (
    <AthleteRegister />
  )
  if (buttonValue === "Instituição") (
    <Institution />
  )
  if (buttonValue === "Mídias") (
    <Medias />
  )
  if (buttonValue === "Bio") (
    <Bio />
  )
  if (buttonValue === "Depoimentos") (
    <Depositions />
  )
  if (buttonValue === "Doação") (
    <Donations />
  )

  return <section></section>;
};
