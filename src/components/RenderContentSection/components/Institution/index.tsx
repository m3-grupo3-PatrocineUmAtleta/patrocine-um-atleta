import { iInstitution } from "../../../../providers/User/interfaces";
import { IntitutionStyle } from "./style";
import LocacateVector from "../../../../assets/img/LocateVector.svg";

export const Institution = ({
  name,
  image,
  tournamentsInfo,
  location,
  aboutUs,
}: iInstitution) => (
  <IntitutionStyle>
    <div className="divNameAndParticipations">
      <div className="descriptionInstitution">
        <img src={image} alt="" />
        <h2>{name}</h2>
      </div>
      <h2 className="title-2">{`Participações: ${tournamentsInfo?.totalPlayed} torneios`}</h2>
    </div>
    <div>
      <div className="divLocation">
        <img src={LocacateVector} alt="" />
        <p className="gray-50 headline">{location}</p>
      </div>
      <h2>Sobre nós:</h2>
      <p className="caption">{aboutUs}</p>
    </div>
  </IntitutionStyle>
);
