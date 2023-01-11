import { useContext } from "react";
import { UserContext } from "../../../../providers/User";
import { iDeposition } from "../../../../providers/User/interfaces";
import { DepositionsStyle } from "./style";

interface iDepositionsProp {
  depositionList: iDeposition[];
  image?: string;
}

export const Depositions = ({ depositionList, image }: iDepositionsProp) => {
  const { setSettingsModal, setIsOpenModal } = useContext(UserContext);

  const handleCLick = () => {
    setIsOpenModal(true);
    setSettingsModal("athleteDepositions");
  };

  return (
    <DepositionsStyle>
      <div className="divNameAndButton">
        <div className="divTitleDescription">
          <img src={image} alt="" />
          <h2>Comentários sobre o atleta</h2>
        </div>
        <button onClick={handleCLick}>Comentar</button>
      </div>
      <ul>
        {depositionList.map((deposition) => (
          <div>
            <h3 className="title-3">{deposition.author.name}</h3>
            <p>{deposition.content}</p>
          </div>
        ))}
      </ul>
    </DepositionsStyle>
  );
};
