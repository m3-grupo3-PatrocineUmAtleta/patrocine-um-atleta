import { useState } from "react";
import { useForm } from "react-hook-form";
import { postDeposition } from "../../../../services/postComent";
import { ToastInfo } from "../../../Toast";
import { DepositionsStyle } from "./style";


export const DepositionsForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (data: any) => {
    setIsLoading(!isLoading);
    const storageAthlete: any = localStorage.getItem("@SelectedAthlete");
    const athlete = JSON.parse(storageAthlete);

    const athleteId = athlete.id;
    const userId = localStorage.getItem("@UserId");
    const localToken = localStorage.getItem("@Token")

    data = {...data, athleteId: athleteId}

    data.content.length ? 
    postDeposition({data, userId, localToken})
    :
    ToastInfo("Escreva um comentário");
  };

  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });

  return (
    <DepositionsStyle>
      <h3>Insira abaixo seu depoimento: </h3>
      <form onSubmit={handleSubmit(submit)}>
        <textarea
          id="content"
          {...register("content")}
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
