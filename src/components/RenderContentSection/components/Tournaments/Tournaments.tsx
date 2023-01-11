import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../providers/User";
import { iTournament } from "../../../../providers/User/interfaces";
import { DivTournaments } from "./style";
import addImg from "../../../../assets/img/add.svg";
import { Input } from "../../../Form/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface iTournamentForm {
  name: string;
  location: string;
  date: string;
  status: "Ongoing" | "Finished";
  participants: string;
  rewards: string;
  imgUrl?: string;
  place?: string;
  id: number;
}

const EditTournamentSchema = yup.object().shape({
  name: yup.string(),
  location: yup.string(),
  date: yup.string(),
  status: yup.string(),
  participants: yup.string(),
  rewards: yup.string(),
  imgUrl: yup.string(),
  place: yup.string(),
});

export const Tournaments = () => {
  const { register, handleSubmit } = useForm<iTournamentForm>({
    resolver: yupResolver(EditTournamentSchema),
  });
  const { user, setIsOpenModal, openModal, setSettingsModal } =
    useContext(UserContext);
  const [tournament, setTournament] = useState<iTournament | undefined>();

  const handleClick = () => {
    setIsOpenModal(!openModal);
    setSettingsModal("tournamentRegister");
  };

  return (
    <DivTournaments>
      {user?.isAdmin ? (
        <>
          <div className="admHeader">
            <h2 className="title-3 uppercase">Torneios</h2>
            <button onClick={handleClick}>
              <img src={addImg} alt="Adicionar Torneios" />
            </button>
          </div>

          <form>
            <div className="divControler">
              <div>
                <fieldset className="fieldName">
                  <legend className="caption">Nome do torneio</legend>
                  <select
                    name="name"
                    id="name"
                    defaultValue="all"
                    onChange={(e) =>
                      setTournament(
                        user?.tournaments?.find(
                          (tournament) =>
                            tournament.id === Number(e.target.value)
                        )
                      )
                    }
                  >
                    <option value="all">Selecioane um torneio</option>
                    {user?.tournaments?.map((tournament) => (
                      <option value={tournament.id} key={tournament.id}>
                        {tournament.name}
                      </option>
                    ))}
                  </select>
                </fieldset>
                <Input
                  text="Data"
                  type="date"
                  id="date"
                  defaultValue={tournament?.date}
                  register={register("date")}
                />
                <Input
                  text="Tipo de premiação"
                  type="text"
                  id="rewards"
                  defaultValue={tournament?.rewards}
                  register={register("rewards")}
                />
              </div>

              <div>
                <fieldset className="fieldStatus">
                  <legend className="caption">Status</legend>
                  <select
                    id="status"
                    defaultValue={tournament?.status}
                    {...register("status")}
                  >
                    <option value="Ongoing">Em progresso</option>
                    <option value="Finished">Finalizado</option>
                  </select>
                </fieldset>

                <fieldset className="fieldParticiants ">
                  <legend className="caption">Participantes</legend>
                  <ul>
                    {tournament?.participants.map((participant) => (
                      <li key={participant.id}>
                        <p>{participant.name}</p>
                      </li>
                    ))}
                  </ul>
                </fieldset>
              </div>
            </div>
            <button type="submit">Alterar</button>
          </form>
        </>
      ) : (
        <>{<h2>Torneios em que o atleta participou:</h2>}</>
      )}
    </DivTournaments>
  );
};
