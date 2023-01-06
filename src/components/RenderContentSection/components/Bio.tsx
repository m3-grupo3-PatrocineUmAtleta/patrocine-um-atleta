interface iBioProps {
  hometown: string;
  bio: string;
}

export const Bio = ({hometown, bio}: iBioProps) => (
  <>
    <div className="divImageAndTitle">
      <img src="" alt="Foto de perfil do atleta" />
      <h2>Biografia do atleta</h2>
    </div>
    <div>
      <div className="divLocation">
        <img src="" alt="Ícone localização" />
        <p>{hometown}</p>
      </div>
      <h2>Sobre:</h2>
      <p>{bio}</p>
    </div>
  </>
);
