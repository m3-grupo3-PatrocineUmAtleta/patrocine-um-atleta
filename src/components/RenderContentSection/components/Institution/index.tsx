import {
  iInstitution,
  iTournament,
  iUser,
} from "../../../../providers/User/interfaces";
import { IntitutionStyle } from "./style";
import LocacateVector from "../../../../assets/img/LocateVector.svg";
import { getAllUser } from "../../../../services/getUserAdmin";
import { useEffect, useState } from "react";
import { getTournaments } from "../../../../services/getTournaments";

export const Institution = () => {
  const [contentAllUser, setContentAllUser] = useState<
    iInstitution | undefined
  >();
  const [isLoading, setLoading] = useState(true);
  const [tournaments, setTournaments] = useState<iTournament[]>([]);
  const allUser = async () => {
    const getUsers = await getAllUser();
    setLoading(false);
    setContentAllUser(getUsers);
  };

  const getTournamentsAPI = async () => {
    const tournaments = await getTournaments();
    tournaments && setTournaments(tournaments);
  };

  useEffect(() => {
    allUser();
    getTournamentsAPI();
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
            <h2 className="title-2">{`Participações: ${tournaments?.length} torneios`}</h2>
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
