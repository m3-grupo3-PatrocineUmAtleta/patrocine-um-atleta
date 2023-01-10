import { EmblemCardStyled } from "./style";
import Shield from "../../assets/img/PerfilCard.svg";

interface iEmbelmCardProps {
  imgUrl?: string;
  nickname: string;
}

export const EmblemCard = ({ imgUrl, nickname }: iEmbelmCardProps) => {
  return (
    <EmblemCardStyled>
      <img src={Shield} alt="" />
      <div>
        <img src={imgUrl} alt="" />
        <h4>{nickname}</h4>
      </div>
    </EmblemCardStyled>
  );
};
