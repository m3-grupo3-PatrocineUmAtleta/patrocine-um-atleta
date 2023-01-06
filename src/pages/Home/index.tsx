import { useContext } from "react";
import { Header } from "../../components/Header";
import { ModalWrapper } from "../../components/Modal";
import { UserContext } from "../../providers/User";

export const Home = () => {
  const { openModal, settingsModal } = useContext(UserContext);
  return (
    <>
      {openModal && <ModalWrapper typeModal={settingsModal} />}
      <Header isHome={true}></Header>
    </>
  );
};
