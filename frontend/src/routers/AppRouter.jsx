import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AuthRoutes from "./AuthRoutes";
import ProtectedScreen from "../components/ProtectedScreen";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <PublicRoute isAuth={false}>
              <AuthRoutes />
            </PublicRoute>
          }
        />
        <Route
          path="/ruta-protegida"
          element={
            <PrivateRoute isAuth={false}>
              <ProtectedScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
