import { iInstitution, iUser } from "../../../../providers/User/interfaces";
import { IntitutionStyle } from "./style";
import LocacateVector from "../../../../assets/img/LocateVector.svg";
import { getAllUser } from "../../../../services/getAllUser";
import { useEffect, useState } from "react";

export const Institution = () => {
  const [contentAllUser, setContentAllUser] = useState<
    iInstitution | undefined
  >();
  const [isLoading, setLoading] = useState(true);
  const allUser = async () => {
    const getUsers = await getAllUser();
    setLoading(false);
    setContentAllUser(getUsers);
  };

  useEffect(() => {
    allUser();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="headline-600 text-center">Loading...</div>
      ) : (
        <IntitutionStyle>
          <div className="divNameAndParticipations">
            <div className="descriptionInstitution">
              <h2>Instituição: {contentAllUser?.name}</h2>
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
      )}
    </>
  );
};
