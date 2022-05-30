import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AuthRoutes from "./AuthRoutes";
import ProtectedScreen from "../components/ProtectedScreen";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, user } = useSelector((state) => state.auth);

  if (checking) {
    return <h1>Loading...</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <PublicRoute isAuth={!!user._id}>
              <AuthRoutes />
            </PublicRoute>
          }
        />
        <Route
          path="/ruta-protegida"
          element={
            <PrivateRoute isAuth={!!user._id}>
              <ProtectedScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
