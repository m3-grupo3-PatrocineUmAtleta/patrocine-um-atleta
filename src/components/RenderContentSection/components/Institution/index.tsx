import { IntitutionStyle } from "./style";
import LocacateVector from "../../../../assets/img/LocateVector.svg";
import { useContext } from "react";
import { UserContext } from "../../../../providers/User";

export const Institution = () => {
  const { contentAllUser } = useContext(UserContext);
  return (
    <IntitutionStyle>
      <div className="divNameAndParticipations">
        <div className="descriptionInstitution">
          <img src={"image"} alt="" />
          <h2>{contentAllUser?.name}</h2>
        </div>
        <h2 className="title-2">{`Participações: ${contentAllUser?.tournaments?.length} torneios`}</h2>
      </div>
      <div>
        <div className="divLocation">
          <img src={LocacateVector} alt="" />
          <p className="gray-50 headline">{contentAllUser?.city}</p>
        </div>
        <h2>Sobre nós:</h2>
        <p className="caption">{contentAllUser?.bio}</p>
      </div>
    </IntitutionStyle>
  );
};
