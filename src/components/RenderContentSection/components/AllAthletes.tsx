import { useContext } from "react";
import { UserContext } from "../../../providers/User";
import { AthleteCard } from "../../AthleteCard";

export const AllAthletes = () => {
  const { athletes } = useContext(UserContext);

  return (
    <ul>
      {athletes.length > 0 &&
        athletes.map(({ name, age, id, imgUrl, city }) => {
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
};
