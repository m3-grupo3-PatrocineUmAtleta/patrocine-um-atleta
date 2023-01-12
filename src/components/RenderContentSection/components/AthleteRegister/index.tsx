import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AthleteRegisterAPI } from "../../../../services/athleteRegister";
import { Input } from "../../../Form/Input";
import { TextArea } from "../../../Form/Textarea";
import { DivRegisterAthlete } from "./style";

interface iFormDataRegisterAthlete {
  name: string;
  age: string;
  nickname?: string;
  imgUrl: string;
  bio: string;
  city: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
}

export const AthleteRegister = () => {
  const addAthleteSchema = yup.object().shape({
    name: yup.string().required("Este campo é obrigatótio!"),
    age: yup.string().required("Este campo é obrigatótio!"),
    nickname: yup.string().required("Este campo é obrigatótio!"),
    imgUrl: yup.string().required("Este campo é obrigatótio!"),
    bio: yup.string().required("Este campo é obrigatótio!"),
    city: yup.string().required("Este campo é obrigatótio!"),
    twitter: yup.string(),
    instagram: yup.string(),
    facebook: yup.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<iFormDataRegisterAthlete>({
    resolver: yupResolver(addAthleteSchema),
  });

  const tokenLocal = localStorage.getItem("@Token");
  const adminId = localStorage.getItem("@UserId");

  const registerAthletes = (data: iFormDataRegisterAthlete) => {
    const dataAthlete = {
      name: data.name,
      age: data.age,
      nickname: data.nickname,
      imgUrl: data.imgUrl,
      bio: data.bio,
      city: data.city,
      medias: {
        twitter: data.twitter,
        instagram: data.instagram,
        facebook: data.facebook,
      },
      tournaments: [],
      donations: [],
      depositions: [],
    };
    const dataRegister = { adminId, dataAthlete, tokenLocal };

    AthleteRegisterAPI(dataRegister);
    reset();
  };

  return (
    <DivRegisterAthlete>
      <div className="divNameAndButton">
        <h2>Registra um atleta</h2>
      </div>
      <form onSubmit={handleSubmit(registerAthletes)}>
        <Input
          id="name"
          register={register("name")}
          text="Nome do atleta"
          type="text"
          message={errors.name?.message}
          placeholder="Nome completo"
          valid={isValid}
        />
        <Input
          id="age"
          register={register("age")}
          text="Data de nascimento"
          type="date"
          message={errors.age?.message}
          placeholder="Data de nascimento"
          valid={isValid}
        />
        <Input
          id="nickname"
          register={register("nickname")}
          text="Apelido"
          type="text"
          message={errors.nickname?.message}
          placeholder="Apelido do atleta"
          valid={isValid}
        />
        <Input
          id="imgUrl"
          register={register("imgUrl")}
          text="Link para a imagem"
          type="string"
          message={errors.imgUrl?.message}
          placeholder="linkDaImagem.png"
          valid={isValid}
        />
        <TextArea
          id="bio"
          register={register("bio")}
          text="Biografia do atleta"
          type="string"
          message={errors.bio?.message}
          placeholder="Biografia do atleta"
          valid={isValid}
        />
        <Input
          id="city"
          register={register("city")}
          text="Cidade - UF"
          type="string"
          message={errors.city?.message}
          placeholder="Cidade - UF"
          valid={isValid}
        />
        <Input
          id="instagram"
          register={register("instagram")}
          text="Instagram do atleta"
          type="string"
          message={errors.instagram?.message}
          placeholder="Instagram do atleta"
          valid={isValid}
        />
        <Input
          id="twitter"
          register={register("twitter")}
          text="Twitter do atleta"
          type="string"
          message={errors.twitter?.message}
          placeholder="twitter do atleta"
          valid={isValid}
        />
        <Input
          id="facebook"
          register={register("facebook")}
          text="Facebook do atleta"
          type="string"
          message={errors.facebook?.message}
          placeholder="facebook do atleta"
          valid={isValid}
        />
        <div className="divButtons">
          <button type="submit">Cadastrar</button>
          <button type="button" onClick={() => reset()}>
            Cancelar
          </button>
        </div>
      </form>
    </DivRegisterAthlete>
  );
};
