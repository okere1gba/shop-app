import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../component/context/context.user";

const ProtectedRoutes = () => {
  const { currentUser } = useContext(UserContext);

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
