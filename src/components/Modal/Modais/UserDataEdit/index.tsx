import { Input } from "../../../Form/Input";
import { DivEditUser } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../../../providers/User";
import { UserEditAPI } from "../../../../services/userEdit";
import { TextArea } from "../../../Form/Textarea";

export interface iFormDataEditUser {
  name: string;
  site?: string;
  imgUrl?: string;
  street: string;
  city: string;
  cep: string;
  bio: string;
  cnpj?: string;
  cpf?: string;
  phone: string;
  email: string;
  age: string;
}

export const UserDataEdit = () => {
  const { user, setUser, setIsOpenModal } = useContext(UserContext);
  const editUserSchema = yup.object().shape({
    name: yup.string(),
    site: yup.string(),
    imgUrl: yup.string(),
    street: yup.string(),
    city: yup.string(),
    cep: yup.string(),
    bio: yup.string(),
    cnpj: yup.string(),
    cpf: yup.string(),
    phone: yup.string(),
    email: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormDataEditUser>({
    resolver: yupResolver(editUserSchema),
  });

  const updateUser = async (data: iFormDataEditUser) => {
    const id = user?.id;
    const token = localStorage.getItem("@Token");

    const newUser = await UserEditAPI({ idUser: id, data, tokenLocal: token });
    setUser(newUser);
    setIsOpenModal(false);
  };

  return (
    <DivEditUser>
      <form onSubmit={handleSubmit(updateUser)}>
        <div className="side-left">
          {user?.isAdmin ? (
            <Input
              id="name"
              text="Nome da Instituição"
              type="text"
              placeholder="Razão Social"
              register={register("name")}
              message={errors.name?.message}
              defaultValue={user?.name}
            />
          ) : (
            <Input
              id="name"
              text="Nome Completo"
              type="text"
              placeholder="Nome completo"
              register={register("name")}
              message={errors.name?.message}
              defaultValue={user?.name}
            />
          )}

          {user?.isAdmin ? (
            <Input
              id="site"
              text="Site"
              type="text"
              placeholder="Site"
              register={register("site")}
              message={errors.site?.message}
              defaultValue={user?.site}
            />
          ) : (
            <Input
              id="age"
              text="Data de nascimento"
              type="date"
              placeholder=""
              register={register("age")}
              message={errors.age?.message}
              defaultValue={user?.dateOfBirth}
            />
          )}
          <Input
            id="imagem"
            text="Imagem"
            type="text"
            placeholder="Link da Imagem"
            register={register("imgUrl")}
            message={errors.imgUrl?.message}
            defaultValue={user?.imgUrl}
          />
          <fieldset>
            <legend>Endereço</legend>
            <Input
              id="street"
              text="Rua"
              type="text"
              placeholder="Nome da rua "
              register={register("street")}
              message={errors.street?.message}
              defaultValue={user?.street}
            />
            <Input
              id="city"
              text="Cidade - UF"
              type="text"
              placeholder="Cidade - UF "
              register={register("city")}
              message={errors.city?.message}
              defaultValue={user?.city}
            />
            <Input
              id="cep"
              text="Cep"
              type="text"
              placeholder="00000-000"
              register={register("cep")}
              message={errors.cep?.message}
              defaultValue={user?.cep}
            />
          </fieldset>
        </div>
        <div className="side-right">
          <TextArea
            id="bio"
            text="Biografia"
            type="textarea"
            placeholder="Biografia"
            register={register("bio")}
            message={errors.bio?.message}
            rows={5}
            height="160px"
            defaultValue={user?.bio}
          />
          {user?.isAdmin && (
            <Input
              id="cnpj"
              text="CNPJ"
              type="text"
              placeholder="00.000.000/0000-00"
              register={register("cnpj")}
              message={errors.cnpj?.message}
              defaultValue={user?.cnpj}
            />
          )}

          <fieldset>
            <legend>Contatos</legend>
            <Input
              id="phone"
              text="Telefone"
              type="text"
              placeholder="(00) 0000-0000"
              register={register("phone")}
              message={errors.phone?.message}
              defaultValue={user?.phone}
            />
            <Input
              id="email"
              text="Email"
              type="text"
              placeholder="seuemail@email.com"
              register={register("email")}
              message={errors.email?.message}
              defaultValue={user?.email}
            />
          </fieldset>
        </div>

        <div className="buttons">
          <button type="submit">Alterar dados</button>
          <button type="button" onClick={() => setIsOpenModal(false)}>
            Cancelar
          </button>
        </div>
      </form>
    </DivEditUser>
  );
};
