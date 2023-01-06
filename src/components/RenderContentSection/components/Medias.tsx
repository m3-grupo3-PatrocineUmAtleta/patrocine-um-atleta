import { iMedias } from "../../../providers/User/interfaces";

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
          <img /* src */ alt="Ícone Facebook" />
        </a>
        <a href={instagram}>
          <img /* src */ alt="Ícone Instagram" />
        </a>
        <a href={twitter}>
          <img /* src */ alt="Ícone Twitter" />
        </a>
      </div>
    </div>
  </>
);
