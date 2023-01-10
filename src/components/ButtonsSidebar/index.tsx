import { useContext } from "react";
import { UserContext } from "../../providers/User";
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
      <h4 className="title-4">{text}</h4>
    </StyledButtonsSidebar>
  );
};
