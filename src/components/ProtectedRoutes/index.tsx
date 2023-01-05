import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/User";

export const ProtectedRoutes = () => {
  const { user, isLoading } = useContext(UserContext);

  if (isLoading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="home" />;
};
