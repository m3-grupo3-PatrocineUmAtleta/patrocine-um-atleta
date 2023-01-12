import { StyledButtonsSidebar } from "../ButtonsSidebar/style";
import { AiFillStar } from "react-icons/ai";

interface iButtonSidebarFavorite {
  onClick: () => void;
  isFavorite?: boolean;
}

export const ButtonSidebarFavorite = ({
  onClick,
  isFavorite,
}: iButtonSidebarFavorite) => {
  return (
    <StyledButtonsSidebar onClick={onClick}>
      <AiFillStar className={isFavorite ? "yellow" : "gray"} size="50px" />
      <h4 className="text-sideButton">
        {isFavorite ? "Favoritado" : "Favoritar"}
      </h4>
    </StyledButtonsSidebar>
  );
};
