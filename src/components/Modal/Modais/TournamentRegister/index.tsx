import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../../providers/User";
import * as yup from "yup";
import { Input } from "../../../Form/Input";
import addImg from "../../../../assets/img/add.svg";
import { iAthlete } from "../../../../providers/User/interfaces";

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
  const { user, setIsOpenModal, openModal, setSettingsModal, athletes } =
    useContext(UserContext);
  const { register, handleSubmit } = useForm<iTournamentForm>({
    resolver: yupResolver(RegisterTournamentSchema),
  });
  const [select, setSelect] = useState(Number);
  const [selectedAthletes, setSelectedAthletes] = useState<
    iAthlete[] | undefined
  >([] || undefined);

  const addAthlete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(athletes?.find((athlete) => athlete.id === select));
    setSelectedAthletes([
      ...selectedAthletes,
      athletes?.find((athlete) => athlete.id === select),
    ]);
  };
  return (
    <>
      <form>
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
              <button onClick={(e) => addAthlete(e)}>
                <img src={addImg} alt="Adicionar Torneios" />
              </button>
            </fieldset>
            <Input
              text="Nome do torneio"
              type="text"
              id="name"
              register={register("name")}
              placeholder="Insira o nome do torneio"
            />
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
          </div>

          <div>
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
        <button type="submit">Alterar</button>
      </form>
    </>
  );
};
