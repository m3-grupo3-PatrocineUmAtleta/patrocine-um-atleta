import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { Form } from "../../components/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaLogin } from "./schemaLogin";
import { iUserLogin } from "../../services/userLogin";
import { Input } from "../../components/Form/Input";
import { Link } from "react-router-dom";
import { MainLogin } from "./styles";
import { ImSpinner9 } from "react-icons/im";

export const Login = () => {
  const { isLoading, loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValidating },
  } = useForm<iUserLogin>({
    resolver: yupResolver(SchemaLogin),
    mode: "onBlur",
  });

  const login = (data: iUserLogin) => {
    loginUser(data);
  };

  return (
    <MainLogin>
      <div>
        <Form title="Login" eventClick={handleSubmit(login)} nameClass="first">
          <Input
            type="text"
            id="email"
            text="E-mail"
            register={register("email")}
            required
            message={errors.email?.message}
            valid={isValidating}
            placeholder="usuario@email.com"
          />
          <Input
            type="password"
            id="password"
            text="Senha"
            register={register("password")}
            required
            message={errors.password?.message}
            valid={isValidating}
            placeholder="Insira a sua senha"
          />
          {isLoading ? (
            <button disabled>
              <ImSpinner9 size="25px" />
            </button>
          ) : (
            <button type="submit" className="headline">
              Entrar
            </button>
          )}
          <section className="buttons">
            <Link to={"/home"} className="home" />
          </section>
        </Form>

        <section className="second">
          <figure className="logo" />
          <p className="headline">
            Faça parte das conquistas de uma futura estrela do esporte.
          </p>
          <div>
            <p className="headline">Ainda não possui conta?</p>
            <Link to={"/register"} className="headline">
              Cadastre-se
            </Link>
          </div>
        </section>
      </div>
    </MainLogin>
  );
};
{
  /* {!isLoading ? (
        <Button onClick={handleClick} variant="contained">
          add
        </Button>
      ) : (
        <>
          {" "}
          <LoadingButton onClick={handleClick} loading variant="contained">
            Submit
          </LoadingButton>
        </>
      )} */
}

{
  /* <Button variant="outlined">add</Button>
      <Button variant="text">add</Button>

      <Stack direction="row" spacing={4}>
        <LoadingButton loading variant="contained">
          Submit
        </LoadingButton>
        <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
          Fetch data
        </LoadingButton>
        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          Save
        </LoadingButton>
      </Stack> */
}
