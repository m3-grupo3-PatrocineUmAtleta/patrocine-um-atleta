import { Input, TextArea } from "../../../Form/Input";
import { DivEditUser } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface iFormDataEditUser {
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
}

export const UserDataEdit = () => {
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
    reset,
    formState: { errors, isValid },
  } = useForm<iFormDataEditUser>({
    resolver: yupResolver(editUserSchema),
  });

  return (
    <DivEditUser>
      <form>
        <div className="side-left">
          <Input
            id="name"
            text="Nome da Instituição"
            type="text"
            placeholder="Razão Social"
            register={register("name")}
            message={errors.name?.message}
          />
          <Input
            id="site"
            text="Site"
            type="text"
            placeholder="Site"
            register={register("site")}
            message={errors.site?.message}
          />
          <Input
            id="imagem"
            text="Imagem"
            type="text"
            placeholder="Link da Imagem"
            register={register("imgUrl")}
            message={errors.imgUrl?.message}
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
            />
            <Input
              id="city"
              text="Cidade - UF"
              type="text"
              placeholder="Cidade - UF "
              register={register("city")}
              message={errors.city?.message}
            />
            <Input
              id="cep"
              text="Cep"
              type="text"
              placeholder="00000-000"
              register={register("cep")}
              message={errors.cep?.message}
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
            rows={10}
            height="160px"
          />
          <Input
            id="cnpj"
            text="CNPJ"
            type="text"
            placeholder="000.000.000-00"
            register={register("cnpj")}
            message={errors.cnpj?.message}
          />
          <fieldset>
            <legend>Contatos</legend>
            <Input
              id="phone"
              text="Telefone"
              type="text"
              placeholder="(00) 0000-0000"
              register={register("phone")}
              message={errors.phone?.message}
            />
            <Input
              id="email"
              text="Email"
              type="text"
              placeholder="seuemail@email.com"
              register={register("email")}
              message={errors.email?.message}
            />
          </fieldset>
        </div>
      </form>
    </DivEditUser>
  );
};
