import { useContext } from "react";
import { UserContext } from "../../../../providers/User";
import { iTournament } from "../../../../providers/User/interfaces";
import { DivTournaments } from "./style";

interface iAthleteTournaments {
  tournamentsList: iTournament[];
}

export const Tournaments = ({ tournamentsList }: iAthleteTournaments) => {
  const { user } = useContext(UserContext);

  return (
    <DivTournaments>
      {user?.isAdmin ? (
        <>
          <h2>Torneios</h2>
        </>
      ) : (
        <>
          {" "}
          <h2>Torneios em que o atleta participou:</h2>
          <ul>
            {tournamentsList.map(
              ({ name, location, date, status, rewards, place }) => (
                <li>
                  <h3 className="title-3">
                    {name} - {location}
                  </h3>
                  <p>
                    {date} - {status}
                  </p>
                  <p>{rewards}</p>
                  <p>{place ? place : "Torneio ainda em andamento"}</p>
                </li>
              )
            )}
          </ul>
        </>
      )}
    </DivTournaments>
  );
};
