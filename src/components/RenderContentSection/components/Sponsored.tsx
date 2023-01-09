import { iUser } from "../../../providers/User/interfaces";
import { AthleteCard } from "../../AthleteCard";

export const Sponsored = ({ sponsoredAthletes }: iUser) => (
  <ul>
    {sponsoredAthletes?.map(({ age, athlete_id, img, name, city }) => (
      <AthleteCard
        athlete_id={athlete_id.toString()}
        name={name}
        age={age}
        city={city}
        img={img}
      />
    ))}
  </ul>
);
