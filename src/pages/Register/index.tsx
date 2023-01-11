import { Form } from "../../components/Form";
import { Input, TextArea } from "../../components/Form/Input";
import { MainRegister } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaRegister } from "./schemaRegister";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/User";
import LoadingButton from "@mui/lab/LoadingButton";
import { iRegisterData } from "../../services/userRegister";
import { getAddress, iResponseAddress } from "../../services/getAddress";

export interface iRegisterFormData {
  name: string;
  cpf: string;
  street: string;
  city: string;
  cep: number;
  dateOfBirth: number;
  imgUrl: string;
  bio: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const { isLoading, registerUser } = useContext(UserContext);
  const [address, setAddress] = useState<iResponseAddress>();

  const {
    register,
    handleSubmit,
    formState: { errors, isValidating },
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(SchemaRegister),
    mode: "onBlur",
  });

  const registerU = async (data: iRegisterFormData) => {
    if (data.imgUrl == "") {
      data.imgUrl =
        "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg";
    }
    if (data.bio == "") {
      data.bio = "Ainda pensando …";
    }

    const dataUser: iRegisterData = {
      name: data.name,
      cpf: data.cpf,
      dateOfBirth: data.dateOfBirth,
      street: data.street,
      city: data.city,
      cep: data.cep,
      imgUrl: data.imgUrl,
      bio: data.bio,
      phone: data.phone,
      email: data.email,
      password: data.password,
      favourites: [],
      sponsoredAthletes: [],
      isAdmin: false,
    };

    registerUser(dataUser);
  };

  const getCepAddress = async (cep: number) => {
    const addressCep = await getAddress(cep);
    setAddress(addressCep);
  };
  return (
    <MainRegister>
      <Form eventClick={handleSubmit(registerU)} title="Cadastro">
        <Input
          type="text"
          id="fullName"
          text="Nome completo"
          register={register("name")}
          required
          message={errors.name?.message}
          valid={isValidating}
          placeholder="Insira seu nome completo"
        />
        <Input
          type="number"
          id="cpf"
          text="CPF"
          message={errors.cpf?.message}
          register={register("cpf")}
          required
          placeholder="Insira seu CPF, somente os números"
        />
        <Input
          type="date"
          id="age"
          text="Data de nascimento"
          register={register("dateOfBirth")}
          required
          message={errors.dateOfBirth?.message}
          valid={isValidating}
        />
        <Input
          onBlur={(e) => getCepAddress(Number(e.target.value))}
          type="number"
          id="cep"
          text="CEP"
          message={errors.cep?.message}
          register={register("cep")}
          required
          placeholder="Insira seu CEP, somente os números"
        />
        <Input
          type="text"
          id="street"
          text="Rua"
          register={register("street")}
          required
          message={errors.street?.message}
          valid={isValidating}
          placeholder="Sua rua, seu número"
          defaultValue={address ? address?.logradouro : ""}
        />

        <Input
          type="text"
          id="address"
          text="Cidade, Estado - UF"
          register={register("city")}
          required
          message={errors.city?.message}
          valid={isValidating}
          placeholder="Cidade, Estado - UF"
          defaultValue={
            address
              ? `${address?.bairro}, ${address?.localidade} - ${address?.uf}`
              : ""
          }
        />
        <TextArea
          type="textarea"
          id="bio"
          text="Biografia"
          register={register("bio")}
          required
          message={errors.bio?.message}
          valid={isValidating}
          placeholder="Escreva a sua biografia aqui..."
        />
        <Input
          type="url"
          id="image"
          text="Imagem"
          register={register("imgUrl")}
          required
          placeholder="Insira o link da imagem"
        />
        <Input
          type="text"
          id="phoneNumber"
          text="Telefone"
          register={register("phone")}
          required
          message={errors.phone?.message}
          valid={isValidating}
          placeholder="(00) 0 0000 0000"
        />
        <Input
          type="text"
          id="email"
          text="E-mail"
          register={register("email")}
          required
          message={errors.email?.message}
          valid={isValidating}
          placeholder="seuemail@email.com"
        />
        <Input
          type="password"
          id="password"
          text="Senha"
          register={register("password")}
          required
          message={errors.password?.message}
          valid={isValidating}
          placeholder="Sua senha.."
        />
        <Input
          type="password"
          id="confirmPassword"
          text="Confirmar Senha"
          register={register("confirmPassword")}
          required
          message={errors.confirmPassword?.message}
          valid={isValidating}
          placeholder="Repita sua senha.."
        />
        <button type="submit" className="headline">
          Cadastrar
        </button>
        <section className="buttons">
          <Link to={"/home"} className="home" />
          <Link to={"/"} className="login" />
        </section>
      </Form>
    </MainRegister>
  );
};
