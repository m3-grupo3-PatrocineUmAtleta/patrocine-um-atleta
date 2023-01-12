import { useContext, useEffect } from "react";
import { UserContext } from "../../../../userContext";
import { iDepositionsToEspecifyAthlete } from "../../../../userContext/interfaces";
import { DepositionCard } from "./DepositionCard";
import { StyledDepositions } from "./style";

interface iDepositionsProp {
  depositionList: iDepositionsToEspecifyAthlete[] | undefined;
  image?: string;
}

export const Depositions = ({ depositionList }: iDepositionsProp) => {
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
    <StyledDepositions>
      <div className="divNameAndButton">
        <div className="divTitleDescription">
          <h2>Depoimentos sobre o atleta</h2>
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
    </StyledDepositions>
  );
};
