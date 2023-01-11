import { ModalBackground } from "./style";
import closeModal from "../../assets/img/closeModal.svg";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { UserLogoff } from "./Modais/userLogOff/UserLogOff";
import { AthleteDelete } from "./Modais/athleteDelete/AthleteDelete";
import { AthleteEdit } from "./Modais/AthleteEdit/AthleteEdit";
import { DepositionsForm } from "./Modais/DepositionsForm/DepositionsForm";
import { UserDataEdit } from "./Modais/UserDataEdit/UserDataEdit";

interface iModalProps {
  typeModal: string;
  select?: number | null;
}

export const ModalWrapper = ({ typeModal }: iModalProps) => {
  const { setIsOpenModal, selectedAtlhete } = useContext(UserContext);

  const handleClick = () => {
    setIsOpenModal(false);
  };

  const switchModal = () => {
    switch (typeModal) {
      case "userLogoff":
        return (
          <div>
            <div>
              <div className="ball" />
              <h3 className="title-2">Biografia do atleta</h3>
            </div>
            <button onClick={handleClick}>
              <img src={closeModal} />
            </button>
            <UserLogoff idAthlete={selectedAtlhete} />
          </div>
        );
      case "athleteDepositions":
        return (
          <div>
            <div>
              <div />
              <h3 className="title-2">Deixe um depoimento para o atleta</h3>
            </div>
            <button onClick={handleClick}>
              <img src={closeModal} />
            </button>
            <DepositionsForm />
          </div>
        );
      case "donateConfirm":
        return (
          <div>
            <div>
              <div />
              <h3 className="title-2">Confirmação</h3>
            </div>
            <button onClick={handleClick}>
              <img src={closeModal} />
            </button>
          </div>
          //   <ChildrenComponent/>
        );
      case "userDataEdit":
        return (
          <div>
            <div>
              <div />
              <h3 className="title-2">Editar dados do usuário</h3>
            </div>
            <button onClick={handleClick}>
              <img src={closeModal} />
            </button>
            <UserDataEdit />
          </div>
        );
      case "tournamentRegister":
        return (
          <div>
            <div>
              <div />
              <h3 className="title-2">Registrar um Torneio</h3>
            </div>
            <button onClick={handleClick}>
              <img src={closeModal} />
            </button>
            <TournamentRegister />
          </div>
        );
      case "athleteEdit":
        return (
          <div>
            <div>
              <div />
              <h3 className="title-2">Editar atleta</h3>
            </div>
            <button onClick={handleClick}>
              <img src={closeModal} />
            </button>
            <AthleteEdit idAthlete={selectedAtlhete} />
          </div>
        );
      case "athleteDelete":
        return (
          <div>
            <div>
              <div />
              <h3 className="title-2">Exluir</h3>
            </div>
            <button onClick={handleClick}>
              <img src={closeModal} />
            </button>
            <AthleteDelete idAthlete={selectedAtlhete} />
          </div>
        );
    }
  };

  return <ModalBackground>{switchModal()}</ModalBackground>;
};
