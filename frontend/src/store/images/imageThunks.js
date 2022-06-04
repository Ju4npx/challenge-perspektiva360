import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { fetchWithToken } from "../../helpers/fetch";
import { fileUpload } from "../../helpers/fileUpload";
import { setImage } from "./imageSlice";

export const startGetImage = () => (dispatch) => {
  Swal.fire({
    title: "Obteniendo imagen",
    text: "Por favor, espere...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  let status = 0;
  fetchWithToken("images")
    .then((res) => {
      status = res.status;
      return res.json();
    })
    .then((data) => {
      if (data.ok) {
        const { image } = data;
        dispatch(setImage(image));
        Swal.close();
      } else if (status === 404) {
        Swal.close();
      } else {
        const msg = data.msg
          ? data.msg
          : "Por favor, reinicie la sesión e intente nuevamente";
        Swal.fire("Error", msg, "error");
      }
    })
    .catch((err) => {
      console.log(err);
      Swal.fire("Error", "Por favor, contacte con un administrador", "error");
    });
};

export const startUploadImage = (file) => (dispatch) => {
  Swal.fire({
    title: "Cargando imagen",
    text: "Por favor, espere...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  fileUpload("images", file)
    .then((res) => res.json())
    .then((data) => {
      if (data.ok) {
        const { image } = data;
        dispatch(setImage(image));
        Swal.fire("Carga exitosa", "Imagen cargada correctamente", "success");
      } else {
        const msg = data.msg
          ? data.msg
          : "Por favor, reinicie la sesión e intente nuevamente";
        Swal.fire("Error", msg, "error");
      }
    })
    .catch((err) => {
      console.log(err);
      Swal.fire("Error", "Por favor, contacte con un administrador", "error");
    });
};
