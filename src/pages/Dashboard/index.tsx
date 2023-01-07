import { useContext } from "react";
import { UserContext } from "../../providers/User";

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  return user?.isAdmin ? <>admDash</> : <>userDash</>;
};
