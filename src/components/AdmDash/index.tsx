import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/User";
import { ButtonsSidebar } from "../ButtonsSidebar";
import { Header } from "../Header";
import { StyledAdmDash } from "./style";

export const AdmDash = () => {
  const { user, buttonValue } = useContext(UserContext);

  useEffect(() => {
    console.log(buttonValue);
  }, [buttonValue]);
  return (
    <StyledAdmDash>
      <Header isHome={false}></Header>;
      <ButtonsSidebar text="Perfil" img=""></ButtonsSidebar>
      <ButtonsSidebar text="Informações" img=""></ButtonsSidebar>
      <ButtonsSidebar text="Torneios" img=""></ButtonsSidebar>
      <ButtonsSidebar text="Atletas" img=""></ButtonsSidebar>
      <ButtonsSidebar text="Registrar" img=""></ButtonsSidebar>
    </StyledAdmDash>
  );
};
