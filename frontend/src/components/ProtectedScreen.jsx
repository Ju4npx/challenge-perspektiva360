import { useDispatch } from "react-redux";
import { startLogout } from "../store/auth/authThunks";

const ProtectedScreen = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div>
      ProtectedScreen
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default ProtectedScreen;
