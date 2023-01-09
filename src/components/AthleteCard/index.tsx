import { StyledAthleteCard } from "./style";
import { GoLocation } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { ModalWrapper } from "../Modal";

interface iCardProps {
  athlete_id: number;
  img: string | undefined;
  name: string;
  age: number;
  city: string;
  bio?: string;
  isAdmin?: boolean;
}

export const AthleteCard = ({
  athlete_id,
  img,
  name,
  age,
  city,
  isAdmin,
}: iCardProps) => {
  const { setIsOpenModal, setSelectedAtlhete } = useContext(UserContext);

  const modalOpen = () => {
    setIsOpenModal(true);
    setSelectedAtlhete(Number(athlete_id));
    return <ModalWrapper typeModal="userLogoff" />;
  };
  return (
    <StyledAthleteCard id={athlete_id.toString()}>
      <div className="div-img">
        <img src={img} alt="" />
      </div>
      <div className="div-inf">
        <h3 className="title-3">{name}</h3>
        <h4 className="title-4">{age} anos</h4>
        <div className="div-local">
          <GoLocation className="local-icon" />
          <span className="headline">{city}</span>
        </div>

        {isAdmin ? (
          <div className="div-icons">
            <FaEye className="eye-icon icon" />
            <BiTrash className="trash-icon icon" />
            <FiEdit className="edit-icon icon" />
          </div>
        ) : (
          <div className="div-icons">
            <FaEye className="eye-icon icon" onClick={() => modalOpen()} />
          </div>
        )}
      </div>
    </StyledAthleteCard>
  );
};
