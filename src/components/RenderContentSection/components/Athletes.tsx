import { iAthlete } from "../../../providers/User/interfaces";
import { AthleteCard } from "../../AthleteCard";

interface iAthletesProp {
  athleteList: iAthlete[];
}

export const Athletes = ({ athleteList }: iAthletesProp) => (
  <ul>
    {athleteList?.map(({ name, age, athlete_id, img, city }) => {
      return (
        <AthleteCard
          age={age}
          athlete_id={athlete_id.toString()}
          city={city}
          img={img}
          name={name}
        />
      );
    })}
  </ul>
);
