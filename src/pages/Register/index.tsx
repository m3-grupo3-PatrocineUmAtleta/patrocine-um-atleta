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

export interface iRegisterFormData {
  name: string;
  cpf: string;
  street: string;
  address: string;
  cep: number;
  age: number;
  image: string;
  bio: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const { isLoading, registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValidating },
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(SchemaRegister),
    mode: "onBlur",
  });

  const registerU = async (data: iRegisterFormData) => {
    if (data.image == "") {
      data.image = "https://www.flaticon.com/free-icons/user";
    }
    if (data.bio == "") {
      data.bio = "Ainda pensando …";
    }

    const dataUser: iRegisterData = {
      name: data.name,
      cpf: data.cpf,
      age: data.age,
      street: data.street,
      address: data.address,
      cep: data.cep,
      image: data.image,
      bio: data.bio,
      contacts: {
        phoneNumber: data.phoneNumber,
      },
      email: data.email,
      password: data.password,
      favourites: [],
      sponsoredAthletes: [],
      isAdmin: false,
    };

    registerUser(dataUser);
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
          register={register("age")}
          required
          message={errors.age?.message}
          valid={isValidating}
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
        />

        <Input
          type="text"
          id="address"
          text="Cidade, Estado - UF"
          register={register("address")}
          required
          message={errors.address?.message}
          valid={isValidating}
          placeholder="Cidade, Estado - UF"
        />
        <Input
          type="number"
          id="cep"
          text="CEP"
          message={errors.cep?.message}
          register={register("cep")}
          required
          placeholder="Insira seu CEP, somente os números"
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
          register={register("image")}
          required
          placeholder="Insira o link da imagem"
        />
        <Input
          type="text"
          id="phoneNumber"
          text="Telefone"
          register={register("phoneNumber")}
          required
          message={errors.phoneNumber?.message}
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
