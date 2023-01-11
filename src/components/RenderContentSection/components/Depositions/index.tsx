import { useContext } from "react";
import { UserContext } from "../../../../providers/User";
import { iDeposition } from "../../../../providers/User/interfaces";
import { StyledDepositionCard } from "./DepositionCard/style";
import { DepositionsStyle } from "./style";

interface iDepositionsProp {
  depositionList: iDeposition[];
  image?: string;
}

export const Depositions = ({ depositionList, image }: iDepositionsProp) => {
  const { user } = useContext(UserContext);

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
        <ul>
          {depositionList.map((deposition) => (
            <StyledDepositionCard
              content={deposition.content}
              name={deposition.author.name}
              id={user?.id}
              img={user?.imgUrl}
            />
          ))}
        </ul>
      </div>
    </DepositionsStyle>
  );
};
