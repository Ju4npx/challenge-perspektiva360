import { Link } from "react-router-dom";
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

const RegisterScreen = () => {
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
    console.log(formValues);
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
                  Género
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
            Inicia sesión
          </Link>
        </div>
      </section>
    </main>
  );
};
export default RegisterScreen;
