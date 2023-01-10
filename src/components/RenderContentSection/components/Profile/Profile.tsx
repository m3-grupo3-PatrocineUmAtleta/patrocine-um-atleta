import phoneImg from "../../../../assets/img/phone.svg";
import emailImg from "../../../../assets/img/email.svg";
import editProfileImg from "../../../../assets/img/EditAthletePerfil.svg";
import { useContext } from "react";
import { UserContext } from "../../../../providers/User";
import { DivProfile } from "./style";

export const Profile = () => {
  const { user, setIsOpenModal, openModal, setSettingsModal } =
    useContext(UserContext);

  const handleClick = () => {
    setIsOpenModal(!openModal);
    setSettingsModal("userDataEdit");
  };

  return (
    <DivProfile>
      <div className="divDataAndButton">
        <h3>Dados</h3>
        <button onClick={handleClick}>
          <img src={editProfileImg} alt="Botão de edição" />
        </button>
      </div>
      <div>
        <div className="bodyProfile">
          <div>
            <div className="name">
              <p className="body">
                <strong>Nome</strong>: {user?.name}
              </p>
            </div>
            <div className="site">
              <p className="body">
                <strong>Site</strong>: {user?.site}
              </p>
            </div>
            <div className="bio">
              <p className="body">
                <strong>Bio</strong>:{" "}
                {user?.bio ? user?.bio : "Biografia não informada"}
              </p>
            </div>
          </div>

          <div>
            <div className="address body">
              <p>
                <strong>Endereço</strong>:
              </p>{" "}
              <p>{user?.street}</p>
              <p>{user?.city}</p>
              <p>CEP: {user?.cep}</p>
              <p>CNPJ: {user?.cnpj}</p>
            </div>

            <div className="divContacts">
              <h4>Contatos:</h4>
              <div className="phone">
                <img src={phoneImg} alt="Ícone telefone tocando" />
                {user?.phone ? <p>{user?.phone}</p> : <p>Não informado</p>}
              </div>
              <div className="email">
                <img src={emailImg} alt="Ícone envelope de email" />
                <p>
                  {user?.email ? <p>{user?.email}</p> : <p>Não informado</p>}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DivProfile>
  );
};
