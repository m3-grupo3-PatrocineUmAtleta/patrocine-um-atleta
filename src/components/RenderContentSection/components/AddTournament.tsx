import { SubmitHandler, useForm } from "react-hook-form";
import addImg from "../../../assets/img/add.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../Form/Input";

interface iFormData {
  name: string;
  date: string;
  rewards: string;
  location: string;
  status: string;
}

export const AddTournament = () => {
  const addTournamentSchema = yup.object().shape({
    name: yup.string().required(),

    date: yup.string().required(),

    rewards: yup.string().required(),

    location: yup.string().required(),

    status: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<iFormData>({
    resolver: yupResolver(addTournamentSchema),
  });

  const onRegisterApi = (formData: iFormData) => {};

  const submit: SubmitHandler<iFormData> = async (formData) => {
    onRegisterApi(formData);
  };

  return (
    // pegar o id da instituicao pelo useParams ?
    <>
      <div className="divTitleAndButton">
        <h2>Torneios</h2>
        <button>
          {" "}
          {/* onclick abrir modal de cadastrar torneio */}
          <img src={addImg} alt="Círculo com símbolo de adição" />
        </button>
      </div>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <Input
          id="name"
          register={register("name")}
          text="Nome do Torneio"
          type="text"
          message={errors.name?.message}
          placeholder="Nome"
          valid={isValid}
        />
        <Input
          id="date"
          register={register("date")}
          text="Data do Torneio"
          type="date"
          message={errors.date?.message}
          placeholder="DD/MM/AAAA"
          valid={isValid}
        />
        <Input
          id="rewards"
          register={register("rewards")}
          text="Premiação do Torneio"
          type="text"
          message={errors.rewards?.message}
          placeholder="Premiação"
          valid={isValid}
        />
        <Input
          id="location"
          register={register("location")}
          text="Local do Torneio"
          type="text"
          message={errors.location?.message}
          placeholder="Cidade-Estado"
          valid={isValid}
        />
        <fieldset>
          <label>Situação do Torneio</label>
          <select id="status" {...register("status")}>
            <option value="Participando">Participando</option>
            <option value="Vitória">Vitória</option>
          </select>
        </fieldset>
        <button type="submit">Registrar torneio</button>
        <button type="button">Cancelar</button> {/* onclick fechar modal */}
      </form>
    </>
  );
};
