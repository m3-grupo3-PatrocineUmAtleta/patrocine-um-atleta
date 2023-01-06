import { useContext } from "react";
import { UserContext } from "../../providers/User";

interface iButtonsSidebarProps {
  text: string;
  img: string;
}

export const ButtonsSidebar = ({ text, img }: iButtonsSidebarProps) => {
  const { setButtonValue } = useContext(UserContext);

  return (
    <button onClick={() => setButtonValue(text)}>
      <img src={img} alt="" />
      <h4 className="title-4">{text}</h4>
    </button>
  );
};
