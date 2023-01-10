import { BioStyle } from "./style";
import LocateVector from "../../../../assets/img/LocateVector.svg";

interface iBioProps {
  image?: string;
  city: string;
  bio: string;
}

export const Bio = ({ image, city, bio }: iBioProps) => (
  <BioStyle>
    <div className="divTitleDescription">
      <img src={image} alt="" />
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
  </BioStyle>
);
