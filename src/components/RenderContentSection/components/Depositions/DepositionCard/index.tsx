import { FaUserCircle } from "react-icons/fa";
import { StyledDepositionCard } from "./style";

interface iDepositionCardProps {
  id: string | undefined;
  name: string | undefined;
  content: string;
  img: string | undefined;
}

export const DepositionCard = ({
  id,
  name,
  content,
  img,
}: iDepositionCardProps) => {
  return (
    <StyledDepositionCard id={id + ""}>
      <div>
        <img
          src={
            img === ""
              ? img
              : "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          }
          alt="imagem do usuário"
        />
        <h3 className="title-3">{name}</h3>
      </div>
      <p className="headline">{content}</p>
    </StyledDepositionCard>
  );
};
