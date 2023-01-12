import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../userContext";
import { api } from "../../services/api";

export const ProtectedRoutes = () => {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const validateUser = async (): Promise<any> => {
    const id = window.localStorage.getItem("@UserId");
    const token = window.localStorage.getItem("@Token");
    try {
      const res = await api.get(`/users/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    validateUser();
  }, []);

  if (loading) {
    return null;
  } else {
    return !user ? <Navigate to={"/home"} /> : <Outlet />;
  }
};
