import { useContext } from "react";
import { AdmDash } from "../../pages/AdmDash";
import { UserDash } from "../../pages/UserDash";
import { UserContext } from "../../providers/User";

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  return user?.isAdmin ? <AdmDash /> : <UserDash />;
};