import { useContext } from "react";
import { UserContext } from "../../../../providers/User";
import { RegisterDonate } from "../../../../services/registerDonates";

export const DonateConfirmation = () => {
  const { donateData, setIsOpenModal } = useContext(UserContext);
  const registerDonate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    donateData && RegisterDonate(donateData);
    setIsOpenModal(false);
  };
  return (
    <div className="divConfirm">
      <h3>Deseja realmente concluir a doação ?</h3>
      <div className="divButtons">
        <button onClick={(e) => registerDonate(e)}>SIM</button>
        <button onClick={() => setIsOpenModal(false)}>NÃO</button>
      </div>
    </div>
  );
};
