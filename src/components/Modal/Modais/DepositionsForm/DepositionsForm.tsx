import { useState } from "react";
import { useForm } from "react-hook-form";
import { DepositionsStyle } from "./style";

export const DepositionsForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (data: any) => {
    setIsLoading(!isLoading);
  };

  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });

  return (
    <DepositionsStyle>
      <h3>Insira abaixo seu depoimento: </h3>
      <form onSubmit={handleSubmit(submit)}>
        <textarea
          id="depositions"
          {...register("depositions")}
          className="headline"
        />
        <div className="divNameAndButton">
          <button type="submit">Adicionar</button>
          <button>Cancelar</button>
        </div>
      </form>
    </DepositionsStyle>
  );
};
