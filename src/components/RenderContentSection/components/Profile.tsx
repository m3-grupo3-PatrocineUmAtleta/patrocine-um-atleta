import { iUser } from "../../../providers/User/interfaces";
import phoneImg from "../../../assets/img/phone.svg";
import emailImg from "../../../assets/img/email.svg";
import editProfileImg from "../../../assets/img/EditAthletePerfil.svg";
import { useContext } from "react";
import { UserContext } from "../../../providers/User";

export const Profile = ({ name, bio, phoneNumber, email }: iUser) => {
  const {setIsOpenModal, openModal, setSettingsModal} = useContext(UserContext)
  
  const handleClick = () => {
    setIsOpenModal(!openModal)
    setSettingsModal("userDataEdit")
  }

  return (
    <>
      <div className="divDataAndButton">
        <h3>Dados</h3>
        <button onClick={handleClick}>
          <img src={editProfileImg} alt="Botão de edição" />
        </button>
      </div>
      <div>
        <h4>Nome: {name}</h4>
        <h4>Bio: {bio ? bio : ""}</h4>

        <div className="divContacts">
          <h4>Contatos:</h4>
          <div>
            <img src={phoneImg} alt="Ícone telefone tocando" />
            {phoneNumber ? <p>{phoneNumber}</p> : <p>Não informado</p>}
          </div>
          <div>
            <img src={emailImg} alt="Ícone envelope de email" />
            <p>{email ? <p>{email}</p> : <p>Não informado</p>}</p>
          </div>
        </div>
      </div>
    </>
  );
};
