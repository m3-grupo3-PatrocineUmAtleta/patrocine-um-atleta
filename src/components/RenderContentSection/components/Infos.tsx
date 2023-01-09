import { useEffect, useState } from "react";
import { iAthlete, iInstitution } from "../../../providers/User/interfaces";

export const Infos = ({
  institutionAthletes,
  tournamentsInfo,
  raisings,
}: iInstitution) => {
  const [mostPopular, setMostPopular] = useState({} as iAthlete);

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

  return (
    <>
      <h2>Informações</h2>
      <div>
        <div>
          <h3>Total de atletas:</h3>
          <p>
            Sua instituição tem atualmente {institutionAthletes?.length} atletas
          </p>
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
