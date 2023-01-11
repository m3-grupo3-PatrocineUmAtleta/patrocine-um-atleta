import { DonationsStyle } from "./style";
import cifrao from "../../../../assets/img/cifrao.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface iDonationsProps {
  image?: string;
}

export const Donations = ({ image }: iDonationsProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (data: any) => {
    setIsLoading(!isLoading);
  };

  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });

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
              id="donations"
              {...register("donations")}
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
