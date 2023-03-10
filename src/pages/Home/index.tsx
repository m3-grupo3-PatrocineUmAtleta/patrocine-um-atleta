import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { ModalWrapper } from "../../components/Modal";
import { UserContext } from "../../userContext";
import { StyledHome } from "./style";
import { StyledContainer } from "../../styles/Container";
import LogoSimplesIcon from "../../assets/img/LogoSimplesIcon.svg";
import peopleIcon from "../../assets/img/peopleIcon.svg";
import handMoneyIcon from "../../assets/img/handMoneyIcon.svg";
import handHeartIcon from "../../assets/img/handHeartIcon.svg";
import bgPatrocineUmAtletaLogo from "../../assets/img/bg-patrocine-um-atleta.png";
import linkedinIcon from "../../assets/img/linkedinIcon.svg";
import instagramIcon from "../../assets/img/instagramIcon.svg";
import facebookIcon from "../../assets/img/facebookIcon.svg";
import whatsappIcon from "../../assets/img/whatsappIcon.svg";
import phoneIcon from "../../assets/img/phoneIcon.svg";
import locationIcon from "../../assets/img/locationIcon.svg";
import { getAllAthletes } from "../../services/getAllAthletes";
import { AthleteCard } from "../../components/AthleteCard";
import { getDonations } from "../../services/getDonates";
import { getAllUsers } from "../../services/getAllUsers";
import { iUser } from "../../userContext/interfaces";
import { GrLinkedin } from "react-icons/gr"

export const Home = () => {
  const { openModal, athletes, setAthletes, selectedAtlhete } =
    useContext(UserContext);
  const [donations, setDonations] = useState(Number);
  const [donors, setDonors] = useState(Number);

  const getAthletes = async () => {
    const athletes = await getAllAthletes();
    athletes && setAthletes(athletes);
  };

  const getNumberDonates = async () => {
    const list = await getDonations();
    list && setDonations(list.length);
  };

  const getDonors = async () => {
    const count = (await getAllUsers()) || ([] as iUser[]);
    setDonors(count.length - 1);
  };

  useEffect(() => {
    getAthletes();
    getNumberDonates();
    getDonors();
  }, []);

  return (
    <StyledHome>
      {openModal && (
        <ModalWrapper typeModal="userLogoff" select={selectedAtlhete} />
      )}
      <Header isHome />
      <main id="topHome">
        <section className="sectionSponsorship">
          <div className="register">
            <StyledContainer>
              <h2 className="title-home gray-0">Seja um patrocinador!</h2>
              <p className="text-body gray-0">
                O mundo precisa de mais solidariedade, seja um motivador!
              </p>
              <p className="text-body gray-0">
                Ao doar, voc?? incentiva jovens a continuarem na sua jornada
                atletica.
              </p>
              <img src={LogoSimplesIcon} alt="logo" />
              <Link to={"/register"}>Fa??a seu cadastro</Link>
            </StyledContainer>
          </div>
          <div className="athlete">
            <StyledContainer>
              <h2 className="title-home-2 gray-0">
                Alguns de nossos atletas cadastrados
              </h2>
              <ul>
                {athletes.map((athlete) => (
                  <AthleteCard
                    athlete_id={athlete.id}
                    img={athlete.imgUrl}
                    name={athlete.name}
                    age={athlete.age}
                    city={athlete.city}
                    bio={athlete.bio}
                    isAdmin={false}
                    key={athlete.id}
                  />
                ))}
              </ul>
            </StyledContainer>
          </div>
        </section>
        <section className="sectionDonation">
          <div className="reach" id="reach">
            <StyledContainer>
              <h2 className="title-home-2 gray-0">O ALCANCE DA SUA A????O</h2>
              <p className="text-body gray-0">
                Das dificuldades que todos os atletas devem enfrentar,
                destaca-se uma: falta de patroc??nios. Assim, se quer ajudar um
                atleta a ser um campe??o, esta plataforma ajeitou a bola para
                voc?? bater o p??nalti!
                <br />
                Aqui encontrar?? atletas vinculados a institui????es do Brasil
                inteiro! Fa??a parte da conquista de um sonho. Seja um
                patrocinador!
              </p>
              <div className="reach-info">
                <div>
                  <img src={peopleIcon} alt="people icon" />
                  <span className="title-2 gray-0">
                    {athletes.length} pessoas alcan??adas
                  </span>
                </div>
                <div>
                  <img src={handMoneyIcon} alt="hand with money icon" />
                  <span className="title-2 gray-0">{donations} doa????es </span>
                </div>
                <div>
                  <img src={handHeartIcon} alt="hand with heart icon" />
                  <span className="title-2 gray-0">{donors} doadores</span>
                </div>
              </div>
            </StyledContainer>
          </div>
          <div>
            <StyledContainer>
              <h2 className="title-1">COMO FAZER PARTE</h2>
              <p className="text-body">
                Navegue pela plataforma descubra atletas promissores que
                precisam de ajuda financeira para alcan??ar os seus sonhos.
                <br />
                Escolha quem quer ajudar e, de forma simples e r??pida, fa??a uma
                doa????o direta a ele(a)!
                <br />?? um processo r??pido, mas transparente. <br />
                Fa??a parte da conquista de um sonho. Seja um patrocinador!
              </p>
            </StyledContainer>
          </div>
        </section>
      </main>
      <footer id="aboutUs">
        <StyledContainer>
          <div>
            <img src={bgPatrocineUmAtletaLogo} alt="logo" />
            <div>
              <h3 className="title-3 gray-0">Redes</h3>
              <h3 className="title-3 gray-0">Acompanhe nossas redes:</h3>
              <div>
                <img src={instagramIcon} alt="logo" />
                <img src={facebookIcon} alt="logo" />
              </div>
              <section className="linkedin">
                  <div>
                    <img src={linkedinIcon} alt="logo" />
                    <a className="linkedin-link headline-600" href="https://www.linkedin.com/in/anderson-keller-87962ab3" target={"blank"}>Anderson Keller</a>
                  </div>
                  <div>
                    <img src={linkedinIcon} alt="logo" />
                    <a className="linkedin-link headline-600" href="https://www.linkedin.com/in/andrew-da-silva-569101246/" target={"blank"}>Andrew da Silva</a>
                  </div>
                  <div>
                    <img src={linkedinIcon} alt="logo" />
                    <a className="linkedin-link headline-600" href="https://www.linkedin.com/in/julia-pereira-teixeira/" target={"blank"}>Julia Pereira</a>
                  </div>
                  <div>
                    <img src={linkedinIcon} alt="logo" />
                    <a className="linkedin-link headline-600" href="https://www.linkedin.com/in/miguel-felipe-napolitano-70407776/" target={"blank"}>Miguel F. Napolitano</a>
                  </div>
                  <div>
                    <img src={linkedinIcon} alt="logo" />
                    <a className="linkedin-link headline-600" href="https://www.linkedin.com/in/murilo-mendes-83350b184/" target={"blank"}>Murilo Mendes</a>
                  </div>
                  <div>
                    <img src={linkedinIcon} alt="logo" />
                    <a className="linkedin-link headline-600" href="https://www.linkedin.com/in/viniciuspinheirodasilva/" target={"blank"}>Vinicius Pinheiro da Silva</a>
                  </div>
              </section>
            </div>
            <div>
              <h3 className="title-3 gray-0">Contatos</h3>
              <div>
                <div>
                  <img src={whatsappIcon} alt="logo" />
                  <div className="headline-600 gray-0">
                    Telefone: (21) 2525-2525
                  </div>
                </div>
                <div>
                  <img src={phoneIcon} alt="logo" />
                  <div className="headline-600 gray-0">
                    WhatsApp: (21) 98492-3934
                  </div>
                </div>
                <div>
                  <img src={locationIcon} alt="logo" />
                  <div className="headline-600 gray-0">
                    Rua dos Bobos, 0<br />
                    Bras??lia, Destrito Federal ??? DF
                    <br />
                    CEP: 22281-060 <br />
                    CNPJ: 54.070.554/0001-94
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="headline-600 gray-0">
            ??2023 Patrocine um atleta. Todos os direitos reservados.
          </div>
        </StyledContainer>
      </footer>
    </StyledHome>
  );
};
