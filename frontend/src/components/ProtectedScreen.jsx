import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../store/auth/authThunks";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import { startUploadImage } from "../store/images/imageThunks";

const ProtectedScreen = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [imageFile, setImageFile] = useState();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploadImage(file))
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        setImageFile(reader.result);
      };
    }
  };

  return (
    <>
      <main className="content content--main">
        <section className="main">
          <div className="relative-container">
            <div className="main__logo">
              <img className="logo" src={logo} alt="logo" />
            </div>
          </div>
          <form className="form">
            <h1 className="form__title">Cargador de imagenes</h1>
            <div
              className={`uploader__image-container ${
                imageFile ? "uploader__image-container--attach" : ""
              }`}
            >
              <img className="uploader__image" src={imageFile} />
            </div>
            <div className="relative-container">
              <label htmlFor="image" className="btn btn-primary btn--main">
                Cargar
              </label>
              <input
                alt="Upload image"
                accept="image/*"
                className="form__input-file"
                id="image"
                name="image"
                type="file"
                onChange={handleFileChange}
              />
            </div>
          </form>
          <div className="options">
            <span className="options__text">
              {user.firstName} {user.lastName}
            </span>
            <a className="link" onClick={handleLogout}>
              Cerrar sesion
            </a>
          </div>
        </section>
      </main>
    </>
  );
};
export default ProtectedScreen;
