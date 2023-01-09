import { iAthlete, iTournament } from "../../../providers/User/interfaces";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../providers/User";
import { api } from "../../../services/api";

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

  const { user, buttonValue } = useContext(UserContext);

  const [all, setAll] = useState<iAthlete[]>([] as iAthlete[]);

  const getAllathletesInInstitute = () => {
    async function getApi() {
      try {
        const res = await api.get("/athlete");
        console.log(res.data);
        const filterAthletes = res.data.filter((athlete: iAthlete) => {
          console.log(athlete);
          return String(athlete.userId) === String(user?.id);
        });

        setAll(filterAthletes);
      } catch (error) {
        console.error(error);
      } finally {
      }
    }
    getApi();
  };

  const findMostPopular = () => {
    institutionAthletes?.forEach((athlete) => {
      const total = athlete.donations.reduce(
        (acc, current) => acc + +current.amount,
        0
      );

      const currentSum = mostPopular?.donations.reduce(
        (acc, current) => acc + +current.amount,
        0
      );

      if (currentSum) {
        if (total > currentSum) {
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
    getAllathletesInInstitute();
  }, []);

  return (
    <>
      <h2>Informações</h2>
      <div>
        <div>
          <h3>Total de atletas:</h3>
          <p>Sua instituição tem atualmente {all?.length} atletas</p>
        </div>
        <div>
          <h3>Total de torneios:</h3>
          <p>
            Sua instituição participou de {tournamentsInfo?.totalPlayed}{" "}
            torneios
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
          <h3>Seu atleta mais popular é:</h3>
          <p>{mostPopular ? mostPopular.name : "Não informado"}</p>
        </div>
      </div>
    </>
  );
};
