import { Navigate } from "react-router-dom";

const PublicRoute = ({ isAuth, children }) => {
  return isAuth ? <Navigate to="/ruta-protegida" /> : children;
};

export default PublicRoute;
