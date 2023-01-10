import { useContext, useEffect } from "react";
import { UserContext } from "../../../providers/User";
import { getAllAthletes } from "../../../services/getAllAthletes";
import { AthleteCard } from "../../AthleteCard";

export const AllAthletes = () => {
  const { athletes, setAthletes, filterAthletes } = useContext(UserContext);
  const getAthletes = async () => {
    const athletes = await getAllAthletes();
    setAthletes(athletes);
  };

  useEffect(() => {
    getAthletes();
  }, []);

  return (
    <ul>
      {filterAthletes
        ? filterAthletes.map((athlete) => {
            return (
              <AthleteCard
                athlete_id={athlete.id}
                img={athlete.imgUrl}
                name={athlete.name}
                age={athlete.age}
                city={athlete.city}
                bio={athlete.bio}
                isAdmin={false}
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
                isAdmin={false}
                key={athlete.id}
              />
            );
          })}
    </ul>
  );
};
{
  /* {athletes.length > 0 &&
//   athletes.map((athlete) => {
//     return (
//       <AthleteCard
//         athlete_id={athlete.id}
//         img={athlete.imgUrl}
//         name={athlete.name}
//         age={athlete.age}
//         city={athlete.city}
//         bio={athlete.bio}
//         isAdmin={false}
//         key={athlete.id}
//       />
//     );
//   })} */
}
