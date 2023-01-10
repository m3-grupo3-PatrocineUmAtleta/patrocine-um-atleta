import { TournamentCardStyle } from "./style";
import LocateVector from "../../assets/img/LocateVector.svg";

interface iTournamentCardProps {
  instituitionLogo?: string;
  date: string;
  nameTournament: string;
  locate: string;
}

export const TournamentCard = ({
  instituitionLogo,
  date,
  nameTournament,
  locate,
}: iTournamentCardProps) => {
  return (
    <TournamentCardStyle>
      <div>
        <div />
        <div>
          <h3 className="title-3 gray-0">{date.substring(0, 5)}</h3>
          <span className="body gray-0">{date.substring(5)}</span>
        </div>
      </div>
      <div>
        <h3 className="title-3 gray-0">{nameTournament}</h3>
        <div>
          <img src={LocateVector} alt="" />
          <span>{locate}</span>
        </div>
      </div>
    </TournamentCardStyle>
  );
};
