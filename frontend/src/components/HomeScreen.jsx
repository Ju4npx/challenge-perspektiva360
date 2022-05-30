import { Link } from "react-router-dom";
import cover from "../assets/images/cover.png";
import logo from "../assets/images/logo.png";

const HomeScreen = () => {
  return (
    <main className="content content--home">
      <section className="home">
        <div className="home__void">
          <img className="home__cover" src={cover} alt="Main cover image" />
        </div>
        <div className="home__body">
          <img
            className="home__cover home__cover--background"
            src={cover}
            alt="Background cover image"
          />
          <div className="home__info">
            <div className="home__heading">
              <div className="home__heading-text">
                <span className="home__heading-text-title">Bienvenidos</span>
                <span className="home__heading-text-subtitle">
                  a la Feria Virtual
                </span>
              </div>
            </div>
            <div className="home__subheading">
              <span className="home__subheading-text">
                Regístrate para vivir
                <br />
                la experiencia virtual.
              </span>
              <Link className="btn btn-primary btn--home" to={"/auth/register"}>
                Registrarme
              </Link>
              <div className="home__subheading-logo">
                <div className="vertical-indicator">
                  <span className="vertical-circle"></span>
                </div>
                <div className="home__logo">
                  <img className="logo logo--home" src={logo} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default HomeScreen;
