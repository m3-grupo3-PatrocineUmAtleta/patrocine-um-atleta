import { DonationsStyle } from "./style";
import cifrao from "../../../../assets/img/cifrao.svg";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../../providers/User";

interface iDonationsProps {
  image?: string;
}

export const Donations = ({ image }: iDonationsProps) => {
  const { user, setIsOpenModal, setSettingsModal, setDonateData } =
    useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);
  const athleteLocal = localStorage.getItem("@SelectedAthlete") || "";
  const athlete = JSON.parse(athleteLocal);

  const { register, handleSubmit, reset } = useForm({
    mode: "onBlur",
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
        <img src={image} alt="" />
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
            />
          </div>
        </div>
        <button>Inserir doação</button>
      </form>
    </DonationsStyle>
  );
};
