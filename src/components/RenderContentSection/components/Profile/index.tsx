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
        <h3 className="title-3 uppercase">Dados</h3>
        <button onClick={handleClick}>
          <img src={editProfileImg} alt="Botão de edição" />
        </button>
      </div>
      <div className="profileControler">
        <div className="bodyProfile">
          <div className="dados1">
            <div className="name">
              <p className="body">
                <strong>Nome</strong>: {user?.name}
              </p>
            </div>
            <div className="site">
              {user?.isAdmin && (
                <p className="body">
                  <strong>Site</strong> : {user?.site}
                </p>
              )}
            </div>
            <div className="bio">
              <p className="body">
                <strong>Bio</strong>:
                {user?.bio ? user?.bio : "Biografia não informada"}
              </p>
            </div>
          </div>

          <div className="dados2">
            <div className="address body">
              <p>
                <strong>Endereço</strong>:
              </p>
              <p>{user?.street}</p>
              <p>{user?.city}</p>
              <p>CEP: {user?.cep}</p>
              {user?.isAdmin ? (
                <p>CNPJ: {user?.cnpj}</p>
              ) : (
                <p>CPF: {user?.cpf}</p>
              )}
            </div>

            <div className="divContacts body">
              <p>
                <strong>Contatos</strong>:
              </p>
              <div className="phone">
                <img src={phoneImg} alt="Ícone telefone tocando" />
                {user?.phone ? user?.phone : "Não informado"}
              </div>
              <div className="email">
                <img src={emailImg} alt="Ícone envelope de email" />
                <p>{user?.email ? user?.email : "Não informado"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DivProfile>
  );
};
