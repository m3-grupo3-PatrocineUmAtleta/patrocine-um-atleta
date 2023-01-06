import { iUser } from "../../../providers/User/interfaces";

export const Profile = ({name, site, bio, adress, contacts}: iUser ) => (
  <>
    <div className="divDataAndButton">
      <h3>Dados</h3>
      <button>
        {" "}
        {/* onClick={toggleEditUserModal} ou onClick={toggleEditAdminModal} */}
        <img src="" alt="Botão de edição" />
      </button>
    </div>
    <div>
      <h4>Nome: {name}</h4>
      <h4>Site: {site ? site : ""}</h4>
      <h4>Bio: {bio ? bio : ""}</h4>
      <h4>Endereço: {adress}</h4>
      <div className="divContacts">
        <h4>Contatos:</h4>
        <div>
          <img /* src */ alt="Ícone telefone tocando" />
          {contacts?.phoneNumber ? (
            <p>{contacts.phoneNumber}</p>
          ) : (
            <p>Não informado</p>
          )}
        </div>
        <div>
          <img /* src */ alt="Ícone envelope de email" />
          <p>
            {contacts?.email ? <p>{contacts.email}</p> : <p>Não informado</p>}
          </p>
        </div>
      </div>
    </div>
  </>
);
