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
import { getAddress, iResponseAddress } from "../../services/getAddress";
import { iRegisterData } from "../../services/userRegister";

export interface iRegisterFormData {
  fullName: string;
  age: number;
  image: string;
  bio: string;
  cep: number;
  address: string;
  addressNumber: number;
  localy: string;
  state: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const { isLoading, registerUser, address } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isValidating },
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(SchemaRegister),
    mode: "onChange",
  });

  const registerU = async (data: iRegisterFormData) => {
    if (data.image == "") {
      data.image = "https://www.flaticon.com/free-icons/user";
    }
    if (data.bio == "") {
      data.bio = "Ainda pensando …";
    }

    const dataUser: iRegisterData = {
      fullName: data.fullName,
      age: data.age,
      image: data.image,
      bio: data.bio,
      cep: data.cep,
      address: data.address,
      addressNumber: data.addressNumber,
      localy: data.localy,
      state: data.state,
      phone: data.phone,
      email: data.email,
      password: data.password,
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
          register={register("fullName")}
          required
          message={errors.fullName?.message}
          valid={isValidating}
        />
        <Input
          type="date"
          id="age"
          text="Idade"
          register={register("age")}
          required
          message={errors.age?.message}
          valid={isValidating}
        />
        <Input
          type="text"
          id="image"
          text="Imagem"
          register={register("image")}
          required
        />
        <TextArea
          type="textarea"
          text="Digite sua biografia"
          register={register("bio")}
          required
        />
        <Input
          type="number"
          id="cep"
          text="CEP"
          message={errors.cep?.message}
          register={register("cep")}
          required
          onChange={(e) => getAddress(e.target.valueAsNumber)}
        />
        <Input
          type="text"
          id="address"
          text="Rua"
          register={register("address")}
          required
          disabled
          value={address?.logradouro}
        />
        <Input
          type="text"
          id="addressNumber"
          text="Número"
          message={errors.addressNumber?.message}
          register={register("addressNumber")}
          required
        />
        <Input
          type="text"
          id="localy"
          text="Estado"
          register={register("localy")}
          required
          disabled
          value={address?.localidade}
        />
        <Input
          type="text"
          id="state"
          text="UF"
          register={register("state")}
          required
          disabled
          value={address?.uf}
        />
        <Input
          type="text"
          id="phone"
          text="Telefone"
          register={register("phone")}
          required
          message={errors.phone?.message}
          valid={isValidating}
        />
        <Input
          type="text"
          id="email"
          text="E-mail"
          register={register("email")}
          required
          message={errors.email?.message}
          valid={isValidating}
        />
        <Input
          type="password"
          id="password"
          text="Senha"
          register={register("password")}
          required
          message={errors.password?.message}
          valid={isValidating}
        />
        <Input
          type="password"
          id="confirmPassword"
          text="Confirmar Senha"
          register={register("confirmPassword")}
          required
          message={errors.confirmPassword?.message}
          valid={isValidating}
        />
        {!isLoading ? (
          <button type="submit" className="headline">
            Cadastrar
          </button>
        ) : (
          <LoadingButton loading variant="contained">
            Submit
          </LoadingButton>
        )}

        <section className="buttons">
          <Link to={"/home"} className="home" />
          <Link to={"/"} className="login" />
        </section>
      </Form>
    </MainRegister>
  );
};
