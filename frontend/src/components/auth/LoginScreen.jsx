import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import validator from "validator";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { startLogin } from "../../store/auth/authThunks";
import useForm from "../../hooks/useForm";
import logo from "../../assets/images/logo.png";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLogin({ email, password }));
    }
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      Swal.fire("Error", "El email no es valido", "error");
      return false;
    } else if (password.trim().length === 0) {
      Swal.fire("Error", "La contraseña es requerida", "error");
      return false;
    }
    return true;
  };

  return (
    <main className="content content--main">
      <section className="main">
        <div className="relative-container">
          <div className="main__logo">
            <img className="logo" src={logo} alt="logo" />
          </div>
        </div>
        <form className="form" onSubmit={handleLogin}>
          <h1 className="form__title">Formulario de inicio</h1>
          <div className="form__body">
            <div className="form__field form__field--center">
              <FaEnvelope className="form__icon" />
              <input
                type="email"
                className="form__input"
                placeholder="Correo"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form__field form__field--center">
              <FaLock className="form__icon" />
              <input
                type="password"
                className="form__input"
                placeholder="Contraseña"
                id="password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="relative-container">
            <button type="submit" className="btn btn-primary btn--main">
              Acceder
            </button>
          </div>
        </form>
        <div className="options">
          <span className="options__text">¿No te has registrado?</span>
          <Link className="link" to={"/auth/register"}>
            Crear cuenta
          </Link>
        </div>
      </section>
    </main>
  );
};
export default LoginScreen;
