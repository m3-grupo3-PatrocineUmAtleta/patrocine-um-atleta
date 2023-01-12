<<<<<<< Updated upstream
import { useContext, useState } from "react";
=======
import { useState, useContext } from "react";
>>>>>>> Stashed changes
import { useForm } from "react-hook-form";
import { UserContext } from "../../../../providers/User";
import { postDeposition } from "../../../../services/postComent";
import { ToastInfo } from "../../../Toast";
import { DepositionsStyle } from "./style";

export const DepositionsForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setIsOpenModal } = useContext(UserContext);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const submit = async (data: any) => {
    setIsLoading(!isLoading);
    const storageAthlete: any = localStorage.getItem("@SelectedAthlete");
    const athlete = JSON.parse(storageAthlete);

    const athleteId = athlete.id;
    const userId = localStorage.getItem("@UserId");
    const localToken = localStorage.getItem("@Token");

    data = { ...data, athleteId: athleteId };

    data.content.length
      ? postDeposition({ data, userId, localToken })
      : ToastInfo("Escreva um comentário");
<<<<<<< Updated upstream
    setTimeout(() => {
      handleCloseModal();
    }, 1500);
=======
>>>>>>> Stashed changes
  };

  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });

  return (
    <DepositionsStyle>
      <h3>Insira abaixo seu depoimento: </h3>
      <form onSubmit={handleSubmit(submit)}>
        <textarea id="content" {...register("content")} className="headline" />
        <div className="divNameAndButton">
          <button type="submit">Adicionar</button>
<<<<<<< Updated upstream
          <button onClick={handleCloseModal}>Cancelar</button>
=======
          <button onClick={() => setIsOpenModal(false)}>Cancelar</button>
>>>>>>> Stashed changes
        </div>
      </form>
    </DepositionsStyle>
  );
};
