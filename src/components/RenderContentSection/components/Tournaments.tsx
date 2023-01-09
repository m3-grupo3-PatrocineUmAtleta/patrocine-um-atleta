import { iTournament } from "../../../providers/User/interfaces";

interface iAthleteTournaments {
  tournamentsList: iTournament[];
}

export const Tournaments = ({ tournamentsList }: iAthleteTournaments) => (
  <>
    <h2>Torneios em que o atleta participou:</h2>
    <ul>
      {
        tournamentsList.map(({name, location, date, status, rewards, place}) => (
          <div>
            <h3 className="title-3">{name} - {location}</h3>
            <p>{date} - {status}</p>
            <p>{rewards}</p>
            <p>{place ? place : "Torneio ainda em andamento"}</p>
          </div>
        ))
      }
    </ul>
  </>
);