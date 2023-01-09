import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import xImg from "../../../assets/img/X.svg";
import * as yup from "yup";
import { Input } from "../../Form/Input";

interface iFormData {
  athleteName: string;
  age: string;
  athleteImg: string;
  athleteBio: string;
}

export const AthleteRegister = () => {
  const addAthleteSchema = yup.object().shape({
    athleteName: yup.string().required(),
    age: yup.string().required(),
    athleteImg: yup.string().required(),
    athleteBio: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<iFormData>({
    resolver: yupResolver(addAthleteSchema),
  });

  const onRegisterApi = (formData: iFormData) => {};

  const submit: SubmitHandler<iFormData> = async (formData) => {
    onRegisterApi(formData);
  };

  return (
    // pegar o id da instituicao pelo useParams ?
    <>
      <div className="divNameAndButton">
        <h2>Comentários sobre o atleta</h2>
        <button>
          <img src={xImg} />
        </button>{" "}
        {/* onclick close modal */}
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          id="athleteName"
          register={register("athleteName")}
          text="Nome do atleta"
          type="text"
          message={errors.athleteName?.message}
          placeholder="Nome completo"
          valid={isValid}
        />
        <Input
          id="age"
          register={register("age")}
          text="Idade do atleta"
          type="number"
          message={errors.age?.message}
          placeholder="Idade"
          valid={isValid}
        />
        <Input
          id="athleteImg"
          register={register("athleteImg")}
          text="Link para a imagem"
          type="string"
          message={errors.athleteImg?.message}
          placeholder="link"
          valid={isValid}
        />
        <Input
          id="athleteBio"
          register={register("athleteBio")}
          text="Biografia do atleta"
          type="string"
          message={errors.athleteBio?.message}
          placeholder="..."
          valid={isValid}
        />
      </form>
      <div className="divButtons">
        <button type="submit">Cadastrar</button>
        <button type="button">Cancelar</button> {/* onclick close modal */}
      </div>
    </>
  );
};
