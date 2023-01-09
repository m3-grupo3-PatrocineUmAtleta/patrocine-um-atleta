import { iMedias } from "../../../providers/User/interfaces";
import facebookIcon from "../../../assets/img/facebookIcon.svg"
import instagramIcon from "../../../assets/img/instagramIcon.svg"
import twitterIcon from "../../../assets/img/twitterIcon.svg"

export const Medias = ({ facebook, instagram, twitter }: iMedias) => (
  <>
    <h2>Nome da instituição</h2>

    <div>
      <h3>
        Você também pode acompanhar o atleta mais de perto em suas páginas
        oficiais abaixo:
      </h3>
      <div className="divIcons">
        <a href={facebook}>
          <img src={facebookIcon} alt="Ícone Facebook" />
        </a>
        <a href={instagram}>
          <img src={instagramIcon} alt="Ícone Instagram" />
        </a>
        <a href={twitter}>
          <img src={twitterIcon} alt="Ícone Twitter" />
        </a>
      </div>
    </div>
  </>
);
