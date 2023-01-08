import { useContext } from "react";
import { AdmDash } from "../../components/AdmDash";
import { UserContext } from "../../providers/User";

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  return user?.isAdmin ? <AdmDash /> : <>userDash</>;
};
