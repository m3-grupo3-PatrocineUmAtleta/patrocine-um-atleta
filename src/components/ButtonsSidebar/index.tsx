import { useContext } from "react";
import { UserContext } from "../../userContext";
import { StyledButtonsSidebar } from "./style";

interface iButtonsSidebarProps {
  text: string;
  img: string;
}

export const ButtonsSidebar = ({ text, img }: iButtonsSidebarProps) => {
  const { setButtonValue } = useContext(UserContext);

  return (
    <StyledButtonsSidebar onClick={() => setButtonValue(text)}>
      <img src={img} alt="" />
      <h4 className="text-sideButton">{text}</h4>
    </StyledButtonsSidebar>
  );
};
