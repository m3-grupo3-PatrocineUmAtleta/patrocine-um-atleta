import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { UserContext } from "../../../../UserContext";
import { AthleteEditAPI } from "../../../../services/athleteEdit";
import { getAllAthletes } from "../../../../services/getAllAthletes";
import { Input } from "../../../Form/Input";
import { TextArea } from "../../../Form/Textarea";
import { DivRegisterAthlete } from "../../../RenderContentSection/components/AthleteRegister/style";

interface iFormDataEditAthlete {
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

interface iAthleteEdit {
  idAthlete: number | null;
}

export const AthleteEdit = ({ idAthlete }: iAthleteEdit) => {
  const { athletes, setIsOpenModal, setAthletes } = useContext(UserContext);

  const currentAthlete = athletes.find((athlete) => athlete.id === idAthlete);

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
  } = useForm<iFormDataEditAthlete>({
    resolver: yupResolver(addAthleteSchema),
  });

  const tokenLocal = localStorage.getItem("@Token");

  const registerAthletes = async (data: iFormDataEditAthlete) => {
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
      userId: "1",
    };

    AthleteEditAPI({ idAthlete, data: dataAthlete, tokenLocal });

    const athletes = await getAllAthletes();
    athletes && setAthletes(athletes);
    setIsOpenModal(false);
  };

  return (
    <DivRegisterAthlete>
      <form onSubmit={handleSubmit(registerAthletes)}>
        <Input
          id="name"
          register={register("name")}
          text="Nome do atleta"
          type="text"
          message={errors.name?.message}
          placeholder="Nome completo"
          valid={isValid}
          defaultValue={currentAthlete?.name}
        />
        <Input
          id="age"
          register={register("age")}
          text="Data de nascimento"
          type="date"
          message={errors.age?.message}
          placeholder="Data de nascimento"
          valid={isValid}
          defaultValue={currentAthlete?.age}
        />
        <Input
          id="nickname"
          register={register("nickname")}
          text="Apelido"
          type="text"
          message={errors.nickname?.message}
          placeholder="Apelido do atleta"
          valid={isValid}
          defaultValue={currentAthlete?.nickname}
        />
        <Input
          id="imgUrl"
          register={register("imgUrl")}
          text="Link para a imagem"
          type="string"
          message={errors.imgUrl?.message}
          placeholder="linkDaImagem.png"
          valid={isValid}
          defaultValue={currentAthlete?.imgUrl}
        />
        <TextArea
          id="bio"
          register={register("bio")}
          text="Biografia do atleta"
          type="string"
          message={errors.bio?.message}
          placeholder="Biografia do atleta"
          valid={isValid}
          defaultValue={currentAthlete?.bio}
        />
        <Input
          id="city"
          register={register("city")}
          text="Cidade - UF"
          type="string"
          message={errors.city?.message}
          placeholder="Cidade - UF"
          valid={isValid}
          defaultValue={currentAthlete?.city}
        />
        <Input
          id="instagram"
          register={register("instagram")}
          text="Instagram do atleta"
          type="string"
          message={errors.instagram?.message}
          placeholder="Instagram do atleta"
          valid={isValid}
          defaultValue={currentAthlete?.medias?.instagram}
        />
        <Input
          id="twitter"
          register={register("twitter")}
          text="Twitter do atleta"
          type="string"
          message={errors.twitter?.message}
          placeholder="twitter do atleta"
          valid={isValid}
          defaultValue={currentAthlete?.medias?.twitter}
        />
        <Input
          id="facebook"
          register={register("facebook")}
          text="Facebook do atleta"
          type="string"
          message={errors.facebook?.message}
          placeholder="facebook do atleta"
          valid={isValid}
          defaultValue={currentAthlete?.medias?.facebook}
        />
        <div className="divButtons">
          <button type="submit">Alterar</button>
          <button type="button" onClick={() => setIsOpenModal(false)}>
            Cancelar
          </button>
        </div>
      </form>
    </DivRegisterAthlete>
  );
};
