import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch";
import { clearImage } from "../images/imageSlice";
import { checkCredentials, login, logout } from "./authSlice";

export const startLogin = (loginData) => (dispatch) => {
  fetchWithoutToken("auth/login", loginData, "POST")
    .then((res) => res.json())
    .then((data) => {
      if (data.ok) {
        const { user, token } = data;

        localStorage.setItem("token", token);

        dispatch(login(user));
      } else {
        const msg = data.msg
          ? data.msg
          : data.errors
          ? data.errors[Object.keys(data.errors)[0]].msg
          : "Por favor, reinicie la sesión e intente nuevamente";
        Swal.fire("Error", msg, "error");
      }
    })
    .catch((err) => {
      console.log(err);
      Swal.fire("Error", "Por favor, contacte con un administrador", "error");
    });
};

export const startRegister = (registerData) => (dispatch) => {
  fetchWithoutToken("auth/register", registerData, "POST")
    .then((resp) => resp.json())
    .then((data) => {
      if (data.ok) {
        const { user, token } = data;

        localStorage.setItem("token", token);

        dispatch(login(user));
      } else {
        const msg = data.msg
          ? data.msg
          : data.errors
          ? data.errors[Object.keys(data.errors)[0]].msg
          : "Por favor, reinicie la sesión e intente nuevamente";
        Swal.fire("Error", msg, "error");
      }
    })
    .catch((err) => {
      console.log(err);
      Swal.fire("Error", "Por favor, contacte con un administrador", "error");
    });
};

export const startCheckCredentials = () => (dispatch) => {
  fetchWithToken("auth/renew")
    .then((res) => res.json())
    .then((data) => {
      if (data.ok) {
        const { user, token } = data;

        localStorage.setItem("token", token);

        dispatch(login(user));
      }
    })
    .catch((err) => {
      console.log(err);
      Swal.fire("Error", "Por favor, contacte con un administrador", "error");
    })
    .finally(() => {
      dispatch(checkCredentials());
    });
};

export const startLogout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(logout());
  dispatch(clearImage());
};
