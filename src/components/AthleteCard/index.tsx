import { StyledAthleteCard } from "./style";
import { GoLocation } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { BiTrash, BiWindowOpen } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { ModalWrapper } from "../Modal";
import { useNavigate } from "react-router-dom";
import { getAthletesById } from "../../services/getAthletesById";

interface iCardProps {
  athlete_id: number | string;
  img: string | undefined;
  name: string;
  age: number;
  city?: string;
  value?: number;
  bio?: string;
  isAdmin?: boolean;
  isUserDash?: boolean;
}

export const AthleteCard = ({
  athlete_id,
  img,
  name,
  age,
  city,
  value,
  isAdmin,
  isUserDash,
}: iCardProps) => {
  const { setIsOpenModal, setSelectedAtlhete, setSettingsModal } =
    useContext(UserContext);
  const navigate = useNavigate();

  const modalOpen = () => {
    setIsOpenModal(true);
    setSelectedAtlhete(Number(athlete_id));
    return <ModalWrapper typeModal="userLogoff" />;
  };

  const modalOpenOthers = (typeModal: string) => {
    setIsOpenModal(true);
    setSettingsModal(typeModal);
    setSelectedAtlhete(Number(athlete_id));
  };

  const getAthlete = async () => {
    const atlhetePerfil = await getAthletesById(athlete_id);
    navigate("/athletepage");
  };

  const dataAtual = new Date();
  const getYear = dataAtual.getFullYear();
  const setAge = getYear - Number(age?.toString().slice(0, 4));

  return (
    <StyledAthleteCard id={athlete_id.toString()}>
      <div className="div-img">
        <img src={img} alt="" />
      </div>
      <div className="div-inf">
        <h3 className="title-3">{name?.slice(0, 14)}</h3>

        {isUserDash ? (
          <h3 className="title-3 value">
            {value?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
        ) : (
          <>
            <h4 className="title-4">{setAge} anos</h4>
            <div className="div-local">
              <GoLocation className="local-icon" />
              <span className="headline">{city}</span>
            </div>
          </>
        )}

        {isAdmin ? (
          <div className="div-icons">
            <FaEye className="eye-icon icon" onClick={getAthlete} />
            <BiTrash
              className="trash-icon icon"
              onClick={() => modalOpenOthers("athleteDelete")}
            />
            <FiEdit
              className="edit-icon icon"
              onClick={() => modalOpenOthers("athleteEdit")}
            />
          </div>
        ) : (
          <div className="div-icons">
            {isUserDash ? (
              <BiWindowOpen
                id={athlete_id + ""}
                className="togo-icon icon"
                onClick={getAthlete}
              />
            ) : (
              <FaEye className="eye-icon icon" onClick={() => modalOpen()} />
            )}
          </div>
        )}
      </div>
    </StyledAthleteCard>
  );
};
