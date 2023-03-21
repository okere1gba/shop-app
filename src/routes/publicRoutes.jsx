import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../component/context/context.user";

const PublicRoutes = () => {
  const { currentUser } = useContext(UserContext);

  return currentUser ? <Navigate to="/home" /> : <Outlet />;
};
export default PublicRoutes;
