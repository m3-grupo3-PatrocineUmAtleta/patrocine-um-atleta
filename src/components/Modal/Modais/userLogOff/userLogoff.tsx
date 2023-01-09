import { useContext } from "react";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../providers/User";
import { divUserLogOff } from "./style";

interface iUserLogoff {
  idAthlete: number | null;
}

export const UserLogoff = ({ idAthlete }: iUserLogoff) => {
  const { allAthletes } = useContext(UserContext);
  return (
    <divUserLogOff>
      <div className="modalBody">
        <div className="divLocal">
          <GoLocation className="localIcon" />
          <span className="headline gray-50">
            {allAthletes.find((athlete) => athlete.id === idAthlete)?.city}
          </span>
        </div>

        <div className="aboutAthelte">
          <h2 className="title-2 gray-100">Sobre</h2>
          <p>
            {allAthletes
              .find((athlete) => athlete.id === idAthlete)
              ?.bio.slice(0, 50)}
          </p>
          <span className="blur body">
            {allAthletes
              .find((athlete) => athlete.id === idAthlete)
              ?.bio.slice(50, -1)}
          </span>

          <Link to={"/"}>Ver mais...</Link>
        </div>
      </div>
    </divUserLogOff>
  );
};
