const baseURL = import.meta.env.VITE_BACKEND_URL;

export const fileUpload = async (endpoint, file) => {
  const url = `${baseURL}/${endpoint}`; // localhost:5000/api/images
  const token = localStorage.getItem("token") || "";

  const formData = new FormData();
  formData.append("file", file);

  return fetch(url, {
    method: "PUT",
    headers: {
      "x-token": token,
    },
    body: formData,
  });
};
