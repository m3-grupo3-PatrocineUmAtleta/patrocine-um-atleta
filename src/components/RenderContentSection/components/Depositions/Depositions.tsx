import { useContext } from "react";
import { UserContext } from "../../../../providers/User";
import { iDeposition } from "../../../../providers/User/interfaces";
import { StyledDepositionCard } from "./DepositionCard/style";

interface iDepositionsProp {
  depositionList: iDeposition[];
}

export const Depositions = ({ depositionList }: iDepositionsProp) => {
  const { user } = useContext(UserContext);


  return (
    <>
      <div className="divNameAndButton">
        <h2>Comentários sobre o atleta</h2>
        <button>Comentar</button> {/* onClick={toggleCreateDepositionModal} */}
      </div>
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
    </>
  );
};
