import { useContext, useEffect } from "react";
import { UserContext } from "../../../../providers/User";
import { iDepositionsToEspecifyAthlete } from "../../../../providers/User/interfaces";
import { DepositionCard } from "./DepositionCard";
import { DepositionsStyle } from "./style";

interface iDepositionsProp {
  depositionList: iDepositionsToEspecifyAthlete[] | undefined;
  image?: string;
}

export const Depositions = ({ depositionList, image }: iDepositionsProp) => {
  const {
    user,
    setSettingsModal,
    setIsOpenModal,
    finalyDeps,
    createDepositionsList,
  } = useContext(UserContext);

  const handleCLick = () => {
    setIsOpenModal(true);
    setSettingsModal("athleteDepositions");
  };

  useEffect(() => {
    const get = () => {
      createDepositionsList();
    };
    get();
  }, [finalyDeps]);
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
        {depositionList?.map((deposition, index) => (
          <DepositionCard
            content={deposition.content}
            name={deposition.name}
            id={user?.id + ""}
            img={user?.imgUrl}
            key={index}
          />
        ))}
      </ul>
    </DepositionsStyle>
  );
};
