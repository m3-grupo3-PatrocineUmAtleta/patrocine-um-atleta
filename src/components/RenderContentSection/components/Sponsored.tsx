import { iAthlete } from "../../../providers/User/interfaces";
import { AthleteCard } from "../../AthleteCard";

interface iSponsoredProps {
  sponsoredAthletes: iAthlete[];
}

export const Sponsored = ({ sponsoredAthletes }: iSponsoredProps) => (
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
