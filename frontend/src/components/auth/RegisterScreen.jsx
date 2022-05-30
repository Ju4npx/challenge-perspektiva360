import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import validator from "validator";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import {
  FaUser,
  FaMobileAlt,
  FaEnvelope,
  FaLock,
  FaVenusMars,
  FaMapMarkerAlt,
} from "react-icons/fa";
import useForm from "../../hooks/useForm";
import logo from "../../assets/images/logo.png";
import { startRegister } from "../../store/auth/authThunks";

const VALID_GENDERS = ["M", "F"];

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    firstName: "",
    lastName: "",
    telephone: "",
    email: "",
    password: "",
    password2: "",
    gender: "",
    city: "",
  });
  const {
    firstName,
    lastName,
    telephone,
    email,
    password,
    password2,
    gender,
    city,
  } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegister(formValues));
    }
  };

  const isFormValid = () => {
    if (firstName.trim().length < 2 || firstName.trim().length > 32) {
      Swal.fire(
        "Error",
        "El nombre debe tener entre 2 y 32 caracteres",
        "error"
      );
      return false;
    } else if (lastName.trim().length < 2 || lastName.trim().length > 32) {
      Swal.fire(
        "Error",
        "El apellido debe tener entre 2 y 32 caracteres",
        "error"
      );
      return false;
    } else if (!validator.isNumeric(telephone)) {
      Swal.fire("Error", "El telefono debe ser numerico", "error");
      return false;
    } else if (telephone.trim().length < 7 || telephone.trim().length > 10) {
      Swal.fire(
        "Error",
        "El telefono debe tener entre 7 y 10 caracteres",
        "error"
      );
      return false;
    } else if (!validator.isEmail(email)) {
      Swal.fire("Error", "El email no es valido", "error");
      return false;
    } else if (password.trim().length === 0) {
      Swal.fire("Error", "La contraseña es requerida", "error");
      return false;
    } else if (
      !validator.isStrongPassword(password.toString()) ||
      password.length > 32
    ) {
      Swal.fire(
        "Error",
        "La contraseña debe tener entre 8 y 32 caracteres, debe incluir 1 numero, 1 simbolo, 1 mayuscula y 1 minuscula",
        "error"
      );
      return false;
    } else if (password2 !== password) {
      Swal.fire("Error", "Las contraseñas no coinciden", "error");
      return false;
    } else if (gender == "") {
      Swal.fire("Error", "El genero es requerido", "error");
      return false;
    } else if (!validator.isIn(gender, VALID_GENDERS)) {
      Swal.fire("Error", "El genero debe ser masculino (M) o femenino (F)", "error");
      return false;
    } else if (city.trim().length < 2 || city.trim().length > 32) {
      Swal.fire("Error", "La ciudad debe tener entre 2 y 32 caracteres", "error");
      return false;
    }
    return true;
  };

  return (
    <main className="content content--auth">
      <section className="auth">
        <div className="relative-container">
          <div className="auth__logo">
            <img className="logo" src={logo} alt="logo" />
          </div>
        </div>
        <form className="form" onSubmit={handleRegister}>
          <h1 className="form__title">Formulario de registro</h1>
          <div className="form__body">
            <div className="form__group">
              <div className="form__field">
                <FaUser className="form__icon" />
                <input
                  type="text"
                  className="form__input"
                  placeholder="Nombre"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form__field">
                <FaUser className="form__icon" />
                <input
                  type="text"
                  className="form__input"
                  placeholder="Apellido"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form__group">
              <div className="form__field">
                <FaMobileAlt className="form__icon" />
                <input
                  type="tel"
                  className="form__input"
                  placeholder="Celular"
                  id="telephone"
                  name="telephone"
                  value={telephone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form__field">
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
            </div>
            <div className="form__group">
              <div className="form__field">
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
              <div className="form__field">
                <FaLock className="form__icon" />
                <input
                  type="password"
                  className="form__input"
                  placeholder="Confirmar contraseña"
                  id="password2"
                  name="password2"
                  value={password2}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form__group">
              <div className="form__field--radio" onChange={handleInputChange}>
                <span className="form__field">
                  <FaVenusMars className="form__icon" />
                  Genero
                </span>
                <div
                  className="form__radio-group"
                  onChange={handleInputChange}
                  value={gender}
                >
                  <label className="form__radio-label">
                    M
                    <input
                      type="radio"
                      className="form__radio"
                      name="gender"
                      value="M"
                    />
                  </label>
                  <label className="form__radio-label">
                    F
                    <input
                      type="radio"
                      className="form__radio"
                      name="gender"
                      value="F"
                    />
                  </label>
                </div>
              </div>
              <div className="form__field">
                <FaMapMarkerAlt className="form__icon" />
                <input
                  type="city"
                  className="form__input"
                  placeholder="Ciudad"
                  id="city"
                  name="city"
                  value={city}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="relative-container">
            <button type="submit" className="btn btn-primary btn--auth">
              Registrar
            </button>
          </div>
        </form>
        <div className="options">
          <span className="options__text">¿Ya tienes una cuenta?</span>
          <Link className="link" to={"/auth/login"}>
            Inicia sesion
          </Link>
        </div>
      </section>
    </main>
  );
};
export default RegisterScreen;
