import { StyledBio } from "./style";
import LocateVector from "../../../../assets/img/LocateVector.svg";

interface iBioProps {
  city: string;
  bio: string;
}

export const Bio = ({ city, bio }: iBioProps) => (
  <StyledBio>
    <div className="divTitleDescription">
      <h2>Biografia do atleta</h2>
    </div>
    <div>
      <div className="divLocation">
        <img src={LocateVector} alt="Ícone localização" />
        <p>{city}</p>
      </div>
      <h2>Sobre:</h2>
      <p>{bio} </p>
    </div>
  </StyledBio>
);
