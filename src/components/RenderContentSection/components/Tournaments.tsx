import { iTournament } from "../../../providers/User/interfaces";

interface iAthleteTournaments {
  tournamentsList: iTournament[];
}

export const Tournaments = ({ tournamentsList }: iAthleteTournaments) => (
  <>
    <h2>Torneios em que o atleta participou:</h2>
    <ul>{/* tournamentsList.map() */}</ul>
  </>
);
