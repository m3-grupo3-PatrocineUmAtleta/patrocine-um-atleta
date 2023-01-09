import { iUser } from "../../../providers/User/interfaces";
import { AthleteCard } from "../../AthleteCard";

export const Sponsored = ({ sponsoredAthletes }: iUser) => (
  <ul>
    {sponsoredAthletes?.map(({ age, id, imgUrl, name, city }) => (
      <AthleteCard
        athlete_id={id}
        name={name}
        age={age}
        city={city}
        img={imgUrl}
      />
    ))}
  </ul>
);
