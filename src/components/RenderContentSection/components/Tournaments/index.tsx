import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../../UserContext";
import { iTournament } from "../../../../UserContext/interfaces";
import { DivTournaments } from "./style";
import addImg from "../../../../assets/img/add.svg";
import { Input } from "../../../Form/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { getTournaments } from "../../../../services/getTournaments";
import { TournamentsEditAPI } from "../../../../services/tournamentsEdit";

export interface iTournamentForm {
  name?: string;
  location?: string;
  date?: string;
  status?: "Participando" | "Finalizado";
  participants?: string;
  rewards?: string;
  imgUrl?: string;
  place?: string;
  id?: number;
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
  const { user, setIsOpenModal, openModal, setSettingsModal, athletes } =
    useContext(UserContext);
  const [tournament, setTournament] = useState<iTournament | undefined>();

  const [tournaments, setTournaments] = useState<iTournament[]>([]);

  const getTournamentsAPI = async () => {
    const tournaments = await getTournaments();
    tournaments && setTournaments(tournaments);
  };

  const handleClick = () => {
    setIsOpenModal(!openModal);
    setSettingsModal("tournamentRegister");
  };

  const editTournament = (data: iTournamentForm) => {
    const id = data.id && data.id;
    const dataForm = {
      date: data.date,
      status: data.status,
      rewards: data.rewards,
    };

    TournamentsEditAPI({ idTournament: id, data: dataForm });
  };

  useEffect(() => {
    getTournamentsAPI();
  });

  return (
    <DivTournaments>
      {user?.isAdmin && (
        <>
          <div className="admHeader">
            <h2 className="title-3 uppercase">Torneios</h2>
            <img src={addImg} alt="adicionar" onClick={handleClick} />
          </div>

          <form onSubmit={handleSubmit(editTournament)}>
            <div className="divControler">
              <div>
                <fieldset className="fieldName">
                  <legend className="caption">Nome do torneio</legend>
                  <select
                    id="name"
                    defaultValue="all"
                    {...register("id")}
                    onChange={(e) =>
                      setTournament(
                        tournaments?.find(
                          (tournament) =>
                            tournament.id === Number(e.target.value)
                        )
                      )
                    }
                  >
                    <option value="all">Selecioane um torneio</option>
                    {tournaments?.map((tournament) => (
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
                <fieldset className="fieldName">
                  <legend className="caption">Status</legend>
                  <select
                    id="status"
                    defaultValue={tournament?.status}
                    {...register("status")}
                  >
                    {tournament?.status === "Participando" ? (
                      <>
                        <option value="Participando">Participando</option>
                        <option value="Finalizado">Finalizado</option>
                      </>
                    ) : (
                      <>
                        <option value="Finalizado">Finalizado</option>
                        <option value="Participando">Participando</option>
                      </>
                    )}
                  </select>
                </fieldset>
                <fieldset className="fieldParticiants ">
                  <legend className="caption">Participantes</legend>
                  <ul>
                    {tournament?.participants.map((participant) => (
                      <li key={participant.athleteId}>
                        <p>
                          {
                            athletes.find(
                              (athlete) => athlete.id === participant.athleteId
                            )?.name
                          }
                        </p>
                      </li>
                    ))}
                  </ul>
                </fieldset>
              </div>
            </div>

            <button type="submit">Alterar</button>
          </form>
        </>
      )}
    </DivTournaments>
  );
};
