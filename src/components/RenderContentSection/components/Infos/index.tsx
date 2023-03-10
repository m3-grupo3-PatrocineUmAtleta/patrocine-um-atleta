import { iAthlete, iTournament } from "../../../../userContext/interfaces";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../userContext";
import { getAllAthletes } from "../../../../services/getAllAthletes";
import { DivInfos } from "./style";
import { getDonations } from "../../../../services/getDonates";

interface iInfosProps {
  tournamentsInfo?: {
    tournaments: iTournament[];
    totalPlayed: number;
    wins: number;
  };
  institutionAthletes?: iAthlete[];
  raisings?: string;
}

export const Infos = ({
  institutionAthletes,
  tournamentsInfo,
}: iInfosProps) => {
  const [mostPopular, setMostPopular] = useState({} as iAthlete);
  const [totalDonations, setTotalDonations] = useState<number | undefined>();

  const { user } = useContext(UserContext);

  const [athletes, setAthletes] = useState([] as iAthlete[]);

  const filterApi = async () => {
    try {
      const res = await getAllAthletes();
      res && setAthletes(res);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const findMostPopular = () => {
    institutionAthletes?.forEach((athlete) => {
      const total = athlete.donates?.reduce(
        (acc, current) => acc + current.amount,
        0
      );

      const currentSum = mostPopular?.donates?.reduce(
        (acc, current) => acc + current.amount,
        0
      );

      if (currentSum) {
        if (total ? total > currentSum : null) {
          setMostPopular(athlete);
        }
      } else {
        setMostPopular(athlete);
      }
    });
  };

  const getTotalDonation = async () => {
    const donations = await getDonations();
    const total =
      donations &&
      donations.reduce(
        (accumulator, { amount }) => accumulator + Number(amount),
        0
      );
    return setTotalDonations(total);
  };

  useEffect(() => {
    findMostPopular();
  }, []);
  useEffect(() => {
    filterApi();
    getTotalDonation();
  }, []);

  return (
    <DivInfos>
      <h2 className="title-3 uppercase">Informa????es</h2>
      <div className="divInfo">
        <div>
          <h3>Total de atletas:</h3>
          <p>Sua institui????o tem atualmente {athletes?.length} atletas</p>
        </div>
        <div>
          <h3>Total de torneios:</h3>
          <p>
            Sua institui????o participou de {user?.tournaments?.length} torneios
          </p>
        </div>
        <div>
          <h3>Total de torneios ganhos:</h3>
          <p>Sua institui????o ganhou {tournamentsInfo?.wins || 0} torneios</p>
        </div>
        <div>
          <h3>Total de arrecada????es:</h3>
          <p>Sua institui????o arrecadou um total de R$ {totalDonations},00.</p>
        </div>
        <div>
          {/* <h3>Seu atleta mais popular ??:</h3>
          <p>{mostPopular ? mostPopular.name : "N??o informado"}</p> */}
        </div>
      </div>
    </DivInfos>
  );
};
