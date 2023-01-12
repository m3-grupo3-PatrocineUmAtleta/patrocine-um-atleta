import { iAthlete, iTournament } from "../../../../providers/User/interfaces";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../providers/User";
import { getAllAthletes } from "../../../../services/getAllAthletes";
import { DivInfos } from "./style";

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
  raisings,
}: iInfosProps) => {
  const [mostPopular, setMostPopular] = useState({} as iAthlete);

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
        (acc, current) => acc + +current.amount,
        0
      );

      const currentSum = mostPopular?.donates?.reduce(
        (acc, current) => acc + +current.amount,
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

  useEffect(() => {
    findMostPopular();
  }, []);
  useEffect(() => {
    filterApi();
  }, []);

  return (
    <DivInfos>
      <h2 className="title-3 uppercase">Informações</h2>
      <div className="divInfo">
        <div>
          <h3>Total de atletas:</h3>
          <p>Sua instituição tem atualmente {athletes?.length} atletas</p>
        </div>
        <div>
          <h3>Total de torneios:</h3>
          <p>
            Sua instituição participou de {user?.tournaments?.length} torneios
          </p>
        </div>
        <div>
          <h3>Total de torneios ganhos:</h3>
          <p>Sua instituição ganhou {tournamentsInfo?.wins} torneios</p>
        </div>
        <div>
          <h3>Total de arrecadações:</h3>
          <p>Sua instituição arrecadou um total de R$ {raisings}.</p>
        </div>
        <div>
          {/* <h3>Seu atleta mais popular é:</h3>
          <p>{mostPopular ? mostPopular.name : "Não informado"}</p> */}
        </div>
      </div>
    </DivInfos>
  );
};
