import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch";
import { checkCredentials, login } from "./authSlice";

export const startLogin = (email, password) => (dispatch) => {
  fetchWithoutToken("auth/login", { email, password }, "POST")
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
          : "Please, reload and try again";
        Swal.fire("Error", msg, "error");
      }
    })
    .catch((err) => {
      console.log(err);
      Swal.fire("Error", "Please, contact the administrator", "error");
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
      Swal.fire("Error", "Please, contact the administrator", "error");
    })
    .finally(() => {
      dispatch(checkCredentials());
    });
};
