import { useContext } from "react";
import { UserContext } from "../../../../userContext";
import { AthleteDeleteAPI } from "../../../../services/athleteDelete";
import { getAllAthletes } from "../../../../services/getAllAthletes";
import { DivAthleteDelete } from "./style";

interface iAthleteDelete {
  idAthlete: number | null;
}

export const AthleteDelete = ({ idAthlete }: iAthleteDelete) => {
  const { athletes, setIsOpenModal, setAthletes } = useContext(UserContext);

  const deleteAthlete = async () => {
    const tokenLocal = localStorage.getItem("@Token");
    await AthleteDeleteAPI({ idAthlete, tokenLocal });

    const athletes = await getAllAthletes();
    athletes && setAthletes(athletes);
    setIsOpenModal(false);
  };

  return (
    <DivAthleteDelete>
      <h1 className="title-1">
        Deseja realmente excluir{" "}
        {athletes.find((athlete) => athlete.id === idAthlete)?.name}?
      </h1>
      <div className="divButtons">
        <button type="button" onClick={() => deleteAthlete()}>
          Sim
        </button>
        <button type="button" onClick={() => setIsOpenModal(false)}>
          Não
        </button>
      </div>
    </DivAthleteDelete>
  );
};
