import { useEffect } from "react";
import { iAthlete, iAthleteSponsored } from "../../../providers/User/interfaces";
import { AthleteCard } from "../../AthleteCard";

interface iSponsoredProps {
  sponsoredAthletes: iAthleteSponsored[];
}

export const Sponsored = ({ sponsoredAthletes }: iSponsoredProps) => {
  return (
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

  )
};
