interface iDepositionCardProps {
  id: number | undefined;
  name: string;
  content: string;
  img: string | undefined;
}

export const DepositionCard = ({ id, name, content, img }: iDepositionCardProps) => {
  return (
    <li key={id}>
      <div>
        <img src={img} alt="imagem do usuário" />
        <h3 className="title-3">{name}</h3>
      </div>
      <p>{content}</p>
    </li>
  );
};
