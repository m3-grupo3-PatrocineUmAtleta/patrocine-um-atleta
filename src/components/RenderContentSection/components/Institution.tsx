import { iInstitution } from "../../../providers/User/interfaces";

export const Institution = ({
  name,
  image,
  tournamentsInfo,
  location,
  aboutUs,
}: iInstitution) => (
  <>
    <div className="divNameAndParticipations">
      <div>
        <img src={image} alt="Foto de perfil da instituição" />
        <h2>{name}</h2>
      </div>
      <h2>{`Participações: ${tournamentsInfo?.totalPlayed} torneios`}</h2>
    </div>
    <div>
      <div className="divLocation">
        <img src="" alt="Ícone localização" />
        <p>{location}</p>
      </div>
      <h2>Sobre nós:</h2>
      <p>{aboutUs}</p>
    </div>
  </>
);
