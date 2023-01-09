import { ModalBackground } from "./style";
import closeModal from "../../assets/img/closeModal.svg";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { UserLogoff } from "./Modais/userLogOff/userLogoff";

interface iModalProps {
  typeModal: string;
  select?: number | null;
}

export const ModalWrapper = ({ typeModal, select }: iModalProps) => {
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
      case "athleteStatement":
        return (
          <div>
            <div>
              <div />
              <h3 className="title-2">Deixe um depoimento para o atleta</h3>
            </div>
            <button onClick={handleClick}>
              <img src={closeModal} />
            </button>
          </div>
          //   <ChildrenComponent/>
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
          </div>
          //   <ChildrenComponent/>
        );
      case "instituitionDataEdit":
        return (
          <div>
            <div>
              <div />
              <h3 className="title-2">Editar Instituição</h3>
            </div>
            <button onClick={handleClick}>
              <img src={closeModal} />
            </button>
          </div>
          //   <ChildrenComponent/>
        );
      case "athleteRegister":
        return (
          <div>
            <div>
              <div />
              <h3 className="title-2">Registrar um atleta</h3>
            </div>
            <button onClick={handleClick}>
              <img src={closeModal} />
            </button>
          </div>
          //   <ChildrenComponent/>
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
          </div>
          //   <ChildrenComponent/>
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
          </div>
          //   <ChildrenComponent/>
        );
    }
  };

  return <ModalBackground>{switchModal()}</ModalBackground>;
};
