import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../../userContext";
import * as yup from "yup";
import { Input } from "../../../Form/Input";
import addImg from "../../../../assets/img/add.svg";
import {
  iAthlete,
  iparticipants,
  iTournament,
} from "../../../../userContext/interfaces";
import { RegisterTournaments } from "../../../../services/registerTournaments";
import { DivTournaments } from "../../../RenderContentSection/components/Tournaments/style";

const RegisterTournamentSchema = yup.object().shape({
  name: yup.string(),
  location: yup.string(),
  date: yup.string(),
  status: yup.string(),
  participants: yup.string(),
  rewards: yup.string(),
  imgUrl: yup.string(),
  place: yup.string(),
});
export const TournamentRegister = () => {
  const { athletes, setIsOpenModal } = useContext(UserContext);

  const { register, handleSubmit, reset } = useForm<iTournament>({
    resolver: yupResolver(RegisterTournamentSchema),
  });

  const [select, setSelect] = useState(Number);
  const [selectedAthletes, setSelectedAthletes] = useState<iAthlete[]>([]);
  const [idAthlete, setIdAthlete] = useState<iparticipants[]>([]);

  const addAthlete = () => {
    const selected = athletes.find((athlete) => athlete.id === select);
    selected && setIdAthlete([...idAthlete, { athleteId: selected.id }]);
    selected && setSelectedAthletes([...selectedAthletes, selected]);
  };

  const handleRegister = (data: iTournament) => {
    const formData: iTournament = {
      name: data.name,
      location: data.location,
      date: data.date,
      status: "Participando",
      participants: idAthlete,
      rewards: data.rewards,
      imgUrl: data.imgUrl,
      place: "none",
    };
    RegisterTournaments({ data: formData });
  };

  const cancelRegister = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    reset();
    setIsOpenModal(false);
  };

  return (
    <DivTournaments>
      <form onSubmit={handleSubmit(handleRegister)} className="divRegister">
        <div className="divControler">
          <div>
            <fieldset className="athleteName">
              <legend className="caption">Atleta</legend>
              <select
                name="name"
                id="name"
                defaultValue="default"
                onChange={(e) => setSelect(Number(e.target.value))}
              >
                <option value="default">Selecioane um torneio</option>
                {athletes?.map((atlete) => (
                  <option value={atlete.id} key={atlete.id}>
                    {atlete.name}
                  </option>
                ))}
              </select>

              <img
                src={addImg}
                alt="Adicionar Torneios"
                onClick={() => addAthlete()}
                className="addbutton"
              />
            </fieldset>
            <Input
              text="Nome do torneio"
              type="text"
              id="name"
              register={register("name")}
              placeholder="Insira o nome do torneio"
            />
            <Input
              text="Data"
              type="date"
              id="data"
              register={register("date")}
            />
            <Input
              text="Lugar"
              type="text"
              id="location"
              register={register("location")}
              placeholder="Insira o lugar o do torneio"
            />
          </div>

          <div>
            <Input
              text="Imagem"
              type="text"
              id="imgUrl"
              placeholder="https://linkdaimagem.jpg"
              register={register("imgUrl")}
            />
            <Input
              text="Prêmio"
              type="text"
              id="rewards"
              placeholder="Dinheiro? Quanto?"
              register={register("rewards")}
            />
            <fieldset className="fieldParticiants ">
              <legend className="caption">Participantes</legend>
              <ul>
                {selectedAthletes?.map((participant) => (
                  <li key={participant.id}>
                    <p>{participant.name}</p>
                  </li>
                ))}
              </ul>
            </fieldset>
          </div>
        </div>
        <div className="buttons">
          <button type="submit">Registrar</button>
          <button type="button" onChange={(e) => cancelRegister(e)}>
            Cancelar
          </button>
        </div>
      </form>
    </DivTournaments>
  );
};
