import { useContext, useEffect } from "react";
import { UserContext } from "../../../../userContext";
import { getAllAthletes } from "../../../../services/getAllAthletes";
import { AthleteCard } from "../../../AthleteCard";

import { StyledUlAthlete } from "./styles";

export const Athletes = () => {
  const { athletes, setAthletes, filterAthletes } = useContext(UserContext);

  const getAthletes = async () => {
    const athletes = await getAllAthletes();
    athletes && setAthletes(athletes);
  };

  useEffect(() => {
    getAthletes();
  }, [athletes]);

  return (
    <StyledUlAthlete>
      {filterAthletes.length > 0
        ? filterAthletes.map((athlete) => {
            return (
              <AthleteCard
                athlete_id={athlete.id}
                img={athlete.imgUrl}
                name={athlete.name}
                age={athlete.age}
                city={athlete.city}
                isUserDash={true}
                bio={athlete.bio}
                key={athlete.id}
              />
            );
          })
        : athletes.map((athlete) => {
            return (
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
            );
          })}
    </StyledUlAthlete>
  );
};
