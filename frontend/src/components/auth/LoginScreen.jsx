import { FaEnvelope, FaLock } from "react-icons/fa";
import useForm from "../../hooks/useForm";
import logo from "../../assets/images/logo.png";

const LoginScreen = () => {
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;

  const handleLogin = (e) => {
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
            <button type="submit" className="btn btn-primary btn--auth">
              Acceder
            </button>
          </div>
        </form>
        <div className="options">
          <span className="options__text">¿No te has registrado?</span>
          <a className="link">Crear cuenta</a>
        </div>
      </section>
    </main>
  );
};
export default LoginScreen;
