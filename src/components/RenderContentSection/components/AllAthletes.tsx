import { useContext } from "react";
import { UserContext } from "../../../providers/User";

export const AllAthletes = () => {
  const {allAthletes} = useContext(UserContext);

  return (
    <ul>
      {/* allAthletes.map() */}
    </ul>
  );
};
