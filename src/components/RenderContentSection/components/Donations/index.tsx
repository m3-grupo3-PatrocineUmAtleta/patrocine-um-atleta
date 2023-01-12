import { DonationsStyle } from "./style";
import cifrao from "../../../../assets/img/cifrao.svg";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../../providers/User";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface iDonationsProps {
  image?: string;
}

export const Donations = ({ image }: iDonationsProps) => {
  const { user, setIsOpenModal, setSettingsModal, setDonateData } =
    useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);
  const athleteLocal = localStorage.getItem("@SelectedAthlete") || "";
  const athlete = JSON.parse(athleteLocal);

  const donationSchema = yup.object().shape({
    amount: yup.string().required().min(1),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(donationSchema),
  });

  const submit = async (data: any) => {
    const dataForm = {
      athleteId: athlete.id,
      amount: data.amount,
      userId: user?.id,
    };

    setIsOpenModal(true);
    setSettingsModal("donateConfirm");
    setDonateData(dataForm);
    setIsLoading(!isLoading);
    reset();
  };

  return (
    <DonationsStyle>
      <div className="divTitleDescription">
        <h2>Doação para o atleta</h2>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <h3>Acredite em um sonho!</h3>
        <div>
          <label htmlFor="donations" className="headline">
            Doação
          </label>
          <div>
            <img src={cifrao} alt="" />
            <div />
            <input
              id="amount"
              {...register("amount")}
              type="number"
              placeholder="Digite aqui sua doação..."
              className="headline"
              min={0}
            />
          </div>
        </div>
        <button type="submit" disabled={!isValid}>
          Inserir doação
        </button>
      </form>
    </DonationsStyle>
  );
};
