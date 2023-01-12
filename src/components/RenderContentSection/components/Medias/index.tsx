import { iMedias } from "../../../../providers/User/interfaces";
import facebookIconBlue from "../../../../assets/img/facebookIconBlue.svg";
import instagramIconBlue from "../../../../assets/img/instagramIconBlue.svg";
import twitterIcon from "../../../../assets/img/twitterIcon.svg";
import { MediaStyle } from "./style";

export const Medias = ({ facebook, instagram, twitter }: iMedias) => (
  <MediaStyle>
    <div className="divTitleDescription">
      <h2>Redes sociais</h2>
    </div>
    <div>
      <h3>
        Você também pode acompanhar o atleta mais de perto em suas páginas
        oficiais abaixo:
      </h3>
      <div className="divIcons">
        <a href={`https://${facebook}`} target="_blank">
          <img src={facebookIconBlue} alt="Ícone Facebook" />
        </a>
        <a href={`https://${instagram}`} target="_blank">
          <img src={instagramIconBlue} alt="Ícone Instagram" />
        </a>
        <a href={`https://${twitter}`} target="_blank">
          <img src={twitterIcon} alt="Ícone Twitter" />
        </a>
      </div>
    </div>
  </MediaStyle>
);
