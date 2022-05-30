import { Navigate, Route, Routes } from "react-router-dom";
import HomeScreen from "../components/HomeScreen";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="auth/login" element={<LoginScreen />} />
      <Route path="auth/register" element={<RegisterScreen />} />

      <Route path="/*" element={<Navigate replace to="/auth/login" />} />
    </Routes>
  );
};
export default AuthRoutes;
