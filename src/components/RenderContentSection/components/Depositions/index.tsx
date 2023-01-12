import { useContext, useEffect } from "react";
import { UserContext } from "../../../../providers/User";
import { iDeposition, iDepositionsToEspecifyAthlete } from "../../../../providers/User/interfaces";
import { StyledDepositionCard } from "./DepositionCard/style";
import { DepositionsStyle } from "./style";

interface iDepositionsProp {
  depositionList: iDepositionsToEspecifyAthlete[] | undefined;
  image?: string;
}

export const Depositions = ({ depositionList, image }: iDepositionsProp) => {
  const { user } = useContext(UserContext);

  const { setSettingsModal, setIsOpenModal, depositions, createDepositionsList } = useContext(UserContext);

  const handleCLick = () => {
    setIsOpenModal(true);
    setSettingsModal("athleteDepositions");
  };

  useEffect( () => {
      const get = () => {
        createDepositionsList()
      }
      get()
      
  }, [])
  return (
    <DepositionsStyle>
      <div className="divNameAndButton">
        <div className="divTitleDescription">
          <img src={image} alt="" />
          <h2>Comentários sobre o atleta</h2>
        </div>
        <button onClick={handleCLick}>Comentar</button>
      </div>
<<<<<<< HEAD
        <ul>
          {depositionList?.map((deposition) => (
            <StyledDepositionCard
              content={deposition.content}
              name={deposition.name}
              id={user?.id}
              img={user?.imgUrl}
            />
          ))}
        </ul>
=======
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
>>>>>>> 288063072b043aca1e62af0b1967c14347549d4e
    </DepositionsStyle>
  );
};
