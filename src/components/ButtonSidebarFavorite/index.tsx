import { StyledButtonsSidebar } from "../ButtonsSidebar/style";
import { AiFillStar } from "react-icons/ai";

interface iButtonSidebarFavorite {
  onClick: () => void;
}

export const ButtonSidebarFavorite = ({ onClick }: iButtonSidebarFavorite) => {
  return (
    <StyledButtonsSidebar onClick={onClick}>
      <AiFillStar className="gray" size="50px" />
      <h4 className="text-sideButton">Favoritar</h4>
    </StyledButtonsSidebar>
  );
};
