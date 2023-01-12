import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { StyledButtonsSidebar } from "../ButtonsSidebar/style";
import { AiFillStar } from "react-icons/ai";

export const ButtonSidebarFavorite = () => {
  const { setButtonValue } = useContext(UserContext);

  const handleClick = () => {
    //comentarios
    //favoritar
  };

  return (
    <StyledButtonsSidebar onClick={handleClick}>
      <AiFillStar className="gray" size="50px" />
      <h4 className="text-sideButton">Favoritar</h4>
    </StyledButtonsSidebar>
  );
};
