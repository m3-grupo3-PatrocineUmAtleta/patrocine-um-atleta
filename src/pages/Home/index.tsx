import { useContext } from "react";
import { Header } from "../../components/Header";
import { ModalWrapper } from "../../components/Modal";
import { UserContext } from "../../providers/User";

export const Home = () => {
  const { openModal } = useContext(UserContext);
  return (
    <>
      {openModal && <ModalWrapper typeModal="userLogoff" />}
      <Header></Header>      
    </>
  );
};
