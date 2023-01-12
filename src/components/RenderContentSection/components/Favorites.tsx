import { iAthlete } from "../../../providers/User/interfaces";
import { AthleteCard } from "../../AthleteCard";
import { StyledUlAthlete } from "./Athletes/styles";

interface iFavoritesProps {
  favorites: iAthlete[];
}

export const Favorites = ({ favorites }: iFavoritesProps) => {
  console.log(favorites);
  return (
    <StyledUlAthlete>
      {favorites.length > 0 &&
        favorites.map((athlete) => (
          <AthleteCard
            athlete_id={athlete.id}
            img={athlete.imgUrl}
            name={athlete.name}
            age={athlete.age}
            city={athlete.city}
            bio={athlete.bio}
            isUserDash={true}
            key={athlete.id}
          />
        ))}
    </StyledUlAthlete>
  );
};
