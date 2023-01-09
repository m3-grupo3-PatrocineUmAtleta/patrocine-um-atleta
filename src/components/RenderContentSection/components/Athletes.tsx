import { iAthlete } from "../../../providers/User/interfaces";
import { AthleteCard } from "../../AthleteCard";

interface iAthletesProp {
  athleteList: iAthlete[];
}

export const Athletes = ({ athleteList }: iAthletesProp) => (
  <ul>
    {athleteList?.map(({ name, age, id, imgUrl, city }) => {
      return (
        <AthleteCard
          age={age}
          athlete_id={id}
          city={city}
          img={imgUrl}
          name={name}
        />
      );
    })}
  </ul>
);
