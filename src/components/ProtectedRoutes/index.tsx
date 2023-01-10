import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { UserContext } from "../../providers/User";
import { iUser } from "../../providers/User/interfaces";
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
      console.log(res);

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
    return false;
  } else {
    return !user ? <Navigate to={"/home"} /> : <Outlet />;
  }
};
