interface iBioProps {
  city: string;
  bio: string;
}

export const Bio = ({ city, bio }: iBioProps) => (
  <>
    <h2>Biografia do atleta</h2>
    <div>
      <div className="divLocation">
        <img src="" alt="Ícone localização" />
        <p>{city}</p>
      </div>
      <h2>Sobre:</h2>
      <p>{bio}</p>
    </div>
  </>
);
