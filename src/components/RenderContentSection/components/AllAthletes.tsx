import { useContext } from "react";
import { UserContext } from "../../../providers/User";
import { AthleteCard } from "../../AthleteCard";

export const AllAthletes = () => {
  const { athletes } = useContext(UserContext);

  return (
    <ul>
      {athletes.length > 0 &&
        athletes.map(
          ({
            name,
            age,
            athlete_id,
            img,
            city,
          }) => {
            return (
              <AthleteCard
                age={age}
                athlete_id={athlete_id.toString()}
                city={city}
                img={img}
                name={name}
              />
            );
          }
        )}
    </ul>
  );
};
