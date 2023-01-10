import { useContext, useEffect } from "react";
import { UserContext } from "../../../../providers/User";
import { iAthlete } from "../../../../providers/User/interfaces";
import { getAllAthletes } from "../../../../services/getAllAthletes";
import { AthleteCard } from "../../../AthleteCard";
import { StyledUlAthlete } from "./styles";

export const Athletes = () => {
  const { athletes, setAthletes } = useContext(UserContext);

  const getAthletes = async () => {
    const athletes = await getAllAthletes();
    setAthletes(athletes);
  };

  useEffect(() => {
    getAthletes();
  }, [athletes]);

  return (
    <StyledUlAthlete>
      {athletes?.map((athlete) => {
        return (
          <AthleteCard
            athlete_id={athlete.id}
            img={athlete.imgUrl}
            name={athlete.name}
            age={athlete.age}
            city={athlete.city}
            bio={athlete.bio}
            isAdmin={true}
            key={athlete.id}
          />
        );
      })}
    </StyledUlAthlete>
  );
};
